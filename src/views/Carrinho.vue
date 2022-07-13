<template>
  <div class="carrinho main-container">
    <h1>Meu Carrinho</h1>
    <dashboard/>
  </div>
</template>

<script>

import Dashboard from "../components/Dashboard.vue"

export default {
  name: "carrinho",
  components: {
    Dashboard
  }
}
</script>