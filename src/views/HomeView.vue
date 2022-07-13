<template>
  <Banner/>
  <Formulario/>
</template>

<script>

import Banner from '../components/Banner.vue'
import Formulario from '../components/Formulario.vue'


export default {
  name: 'HomeView',
  components: {
    Banner,
    Formulario
    }
}
</script>
