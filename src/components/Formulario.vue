<template>
    <div>
        <div>
            <form id="burger-form">
                <Mensagem :msg="msg" v-show="msg"/>
                <div class="input-container">
                     <label for="nome" class="form-label">Nome Completo: </label>
                    <input type="text" class="form-control" name="nome" id="nome" v-model="nome" placeholder="Insira seu nome completo">
                 </div>

                <div  id="opcionais-container" class="input-container">
                    <label id="opcionais-title" for="adesivos">Selecione os Adesivos:</label>
                    <div class="checkbox-container" v-for="adesivo in adesivosdata" :key="adesivo.id">
                        <input class="form-check-input" type="checkbox" v-model="adesivos" :value="adesivo.nome">
                        <span> {{ adesivo.nome }} </span>
                    </div>
                </div>

                <div class="input-container">
                    <label for="quantidade" class="form-label">Quantos adesivos de cada: {{ quantidade }} </label>
                    <input type="range" class="form-range" min="1" max="10" step="1" id="quantiade" name="quantidade" v-model="quantidade" @change="calculaPreco()">
                </div>

                <div class="input-container">
                    <label for="observacao" class="form-label">Observação</label>
                    <textarea class="form-control" id="observacao" name="observacao" rows="3" placeholder="Informe alguma observação, duvida ou algum recado." v-model="observacao"></textarea>
                </div>

                <div class="input-container">
                    <label for="preco" class="form-label">Valor Total: R$ {{ total }}</label>
                </div>

                <div class="input-btn">
                    <input type="submit" class="submit-btn" @click="createOrder($event)" value="Adicionar ao Carrinho">                   
                    <router-link to="/carrinho"><input type="button" class="submit-btn carrinho" value="Visualizar Carrinho"></router-link>       
                </div>
             </form>
        </div>
    </div>
</template>

<script>

import Mensagem from "../components/Mensagem.vue"

export default {
    name: "Formulario",
    components: {
        Mensagem
    },
    data() {
        return {
            nome: null,
            adesivosdata: null,
            adesivos: [],
            preco: [],
            quantidade: null,
            observacao: null,
            msg: null,
            total: null,
        }
    }, 
    methods: {
        async getProdutos() {
            
            const req = await fetch("http://localhost:3000/produtos")
            const data = await req.json();

            this.adesivosdata = data.itens
        },

        async calculaPreco() {
            
            this.total = ""
            let selecionados = this.adesivos
            let array = this.adesivosdata
            let soma = 0;
            var total = 0;
            
            for(let i = 0; i < array.length; i++) {
                selecionados.forEach(e => {
                        
                        if (e == array[i].nome) {
                            console.log("Encontrei " + e + " e " + array[i].nome)
                            soma += array[i].preco
                            console.log("Soma total R$" + soma)
                        }                 
                });
                // total do pedido a ser gerado
            }

                total = soma * this.quantidade 
                this.total = total.toFixed(2)
        },

        async createOrder(e) {
            
            e.preventDefault();

            const data = {
                nome: this.nome,
                quantidade: this.quantidade,
                observacao: this.observacao,
                adesivos: Array.from(this.adesivos),
                preco: parseFloat(this.total)
            }

            const dataJson = JSON.stringify(data)
            // console.log(dataJson)
            const req = await fetch("http://localhost:3000/pedidos", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: dataJson
                });

            const res = await req.json()
            
            this.msg = "Itens adicionados ao carrinho com sucesso!"
            setTimeout(() => this.msg = "", 3000)

            this.nome = ""
            this.quantidade = ""
            this.observacao = ""
            this.adesivos = ""
            this.total = ""
        }

    },
    mounted() {
        this.getProdutos();
    }
}
</script>
<style scoped>
    #burger-form {
        max-width: 400px;
        margin: 0 auto;
        padding: 10px;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #0046a0;
    }

    input, select {
        padding: 5px 10px;
        width: 100%;
    }

    #opcionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    #opcionais-title {
        width: 100%;
    }
    
    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input {
        width: auto;
    } 

    .checkbox-container span {
        margin-left: 6px;
        font-weight: bold;
    }

     .input-btn {
        display: flex;
        margin-bottom: 20px;
    }
    
    .submit-btn {
        background-color: #0046a0;
        color: white;
        font-weight: bold;
        border: 2px solid #0046a0;
        padding: 10px;
        width: 100%;
        font-size: 16px;
        margin-right: 10px;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover {
        background-color: transparent;
        color: #0046a0;
    }

    .carrinho{
        background: #06a769;
        border: 2px solid #06a769;
        color: white;
    }

    .carrinho:hover {
         background-color: transparent;
        color: #06a769;
    }

</style>