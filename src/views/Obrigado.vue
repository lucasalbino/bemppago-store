<template>
    <div class="main-container">
        <h1>Obrigado por comprar conosco! :)</h1>
        <p>Número de protocolo {{ numero }} </p>
  </div>
</template>

<script>
export default {
    name: 'obrigado',
    data() {
        return {
            numero: null
        }
    },

    methods: {
        async gerarProtocolo() {
            let aleatorio = Math.floor(Math.random() * 1000000000)
            this.numero = aleatorio
        }
    },
    mounted() {
        this.gerarProtocolo();
    }
}
</script>

<style>

*{
  margin:0; padding:0;
  box-sizing: border-box;
  outline: none; border:none;
  transition: all .2s linear;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding:25px;
  min-height: 40vh;
}

</style>