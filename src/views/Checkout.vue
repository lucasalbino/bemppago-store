<template>
   <div class="container">

    <form action="">

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>Nome Completo:</span>
                    <input type="text" placeholder="Lucas Albino">
                </div>
                <div class="inputBox">
                    <span>Email:</span>
                    <input type="email" placeholder="exemplo@exemplo.com">
                </div>
                <div class="inputBox">
                    <span>Endereço:</span>
                    <input type="text" placeholder="Rua Exemplo">
                </div>
                <div class="inputBox">
                    <span>Cidade:</span>
                    <input type="text" placeholder="Jundiaí">
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>Estado:</span>
                        <input type="text" placeholder="São Paulo">
                    </div>
                    <div class="inputBox">
                        <span>CEP:</span>
                        <input type="text" placeholder="123 456">
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">Pagamento</h3>

                <div class="inputBox">
                    <span>Bandeiras Aceitas:</span>
                    <img src="/img/card_img.png" alt="">
                </div>
                <div class="inputBox">
                    <span>Nome no Cartão:</span>
                    <input type="text" placeholder="LUCAS ALBINO">
                </div>
                <div class="inputBox">
                    <span>Número:</span>
                    <input type="number" placeholder="1111-2222-3333-4444">
                </div>
                <div class="inputBox">
                    <span>Mês de Expiração:</span>
                    <input type="text" placeholder="Janeiro">
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>Ano de Expiração:</span>
                        <input type="number" placeholder="2030">
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="123">
                    </div>
                </div>

            </div>
    
        </div>

        <router-link to="/obrigado"><input type="submit" value="Comprar" class="submit-btn"></router-link>

    </form>

</div>  
</template>

<script>
export default {
    
}
</script>

<style scoped>

*{
  margin:0; padding:0;
  box-sizing: border-box;
  outline: none; border:none;
  text-transform: capitalize;
  transition: all .2s linear;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding:25px;
  min-height: 100vh;
}

.container form{
  padding:20px;
  width:700px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}

.container form .row{
  display: flex;
  flex-wrap: wrap;
  gap:15px;
}

.container form .row .col{
  flex:1 1 250px;
}

.container form .row .col .title{
  font-size: 20px;
  color:#333;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.container form .row .col .inputBox{
  margin:15px 0;
}

.container form .row .col .inputBox span{
  margin-bottom: 10px;
  display: block;
}

.container form .row .col .inputBox input{
  width: 100%;
  border:1px solid #ccc;
  padding:10px 15px;
  font-size: 15px;
  text-transform: none;
}

.container form .row .col .inputBox input:focus{
  border:1px solid #000;
}

.container form .row .col .flex{
  display: flex;
  gap:15px;
}

.container form .row .col .flex .inputBox{
  margin-top: 5px;
}

.container form .row .col .inputBox img{
  height: 34px;
  margin-top: 5px;
  filter: drop-shadow(0 0 1px #000);
}

.container form .submit-btn{
  width: 100%;
  padding:12px;
  font-size: 17px;
  background: #06a769;
  border: 2px solid #06a769;
  color:#fff;
  margin-top: 5px;
  cursor: pointer;
}

.container form .submit-btn:hover{
  background-color: transparent;
  color: #06a769;
}


</style>