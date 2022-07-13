<template>
    <div id="pedido-table"> 
        <div>
            <div id="pedido-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Adesivos:</div>
                <div>Quantidade:</div>
                <div>Valor Total:</div>
                <div>Ações:</div>
            </div>
        </div>
        <div id="pedido-table-rows">
            <div class="pedido-table-row" v-for="pedido in pedidos" :key="pedido.id">
                <div class="order-number">{{ pedido.id }}</div>
                <div>{{ pedido.nome }}</div>
                <div>
                    <ul>
                        <li v-for="(adesivo, index) in pedido.adesivos" :key="index">{{ adesivo }}</li>
                    </ul>
                </div>
                <div>{{ pedido.quantidade }} Itens de Cada</div>
                <div>
                    R$ {{pedido.preco}}
                </div>
                <div>
                    <button class="delete-btn" @click="deletePedido(pedido.id)">Remover</button>
                    <!-- <button class="finalizar">Compra</button> -->
                </div>
            </div>           
        </div>
        <div class="rodape-finalizar">
            <p class="total">Total: R$ {{ valor_total }}</p>
            <router-link to="/checkout"><button class="finalizar">Finalizar Compra</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            pedidos: null,
            pedido_id: null,
            valor_total: "",
        }
    },
    methods: {
        async getPedidos() {

            const req = await fetch("http://localhost:3000/pedidos")
            const data = await req.json();
            this.pedidos = data 

            let sum = 0;
            const arrayTotal = []


             for(let i = 0; i < data.length; i++) {
                 
                 arrayTotal.push(data[i].preco)
                 console.log(arrayTotal)
                
            }
            
            for (let i = 0; i < arrayTotal.length; i++) {
                sum = sum + arrayTotal[i];                
            }

            console.log(parseFloat(sum))
            this.valor_total = sum

        }, 
        async deletePedido(id) { 
            const req = await fetch(`http://localhost:3000/pedidos/${id}`,{
                method: "DELETE"
            })

            const res = await req.json();

            this.getPedidos();
        }
    },
    mounted() {
        this.getPedidos();
    }
}
</script>

<style scoped>
    #pedido-table {
        max-width: 1500px;
        margin: 0 auto;
    }

    #pedido-table-heading,
    #pedido-table-rows,
    .pedido-table-row {
        display: flex;
        flex-wrap: wrap;
    }

   #pedido-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
   }

    #pedido-table-heading div,
    .pedido-table-row div {
        width: 19%;
    }

    .pedido-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #333;
    }

    #pedido-table-heading .order-id,
    .pedido-table-row .order-number{
        width: 5%;
    }

    button {
        margin-right: 12px;
    }

    .delete-btn {
        background-color: rgb(146, 33, 33);
        color: white;
        font-weight: bold;
        border: 2px solid rgb(146, 33, 33);
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        transition: .5s;
    }

    .delete-btn:hover {
        background-color: transparent;
        color: rgb(146, 33, 33);
    }

    .rodape-finalizar {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }

    .total {
        font-weight: bold;
        font-size: 20px;
        margin-top: 15px;
        margin-right: 10px;
    }

    .finalizar {
        background: #06a769;
        border: 2px solid #06a769;
        color: white;
        font-weight: bold;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        transition: .5s;
        margin-right: 10px;
    }

    .finalizar:hover {
        background-color: transparent;
        color: #06a769;
    }

</style>