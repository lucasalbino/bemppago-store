<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer/>
</template>

<script>

  import Navbar from "./components/Navbar.vue"
  import Footer from "./components/Footer.vue"

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        logo_src: '/img/logo.png',
        app_name: 'BemPaggo Store'
      }
    }
  }

</script>

<style>

  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  body::-webkit-scrollbar {
    width: 8px;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-track {
    background: #c7c7ff;        /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
    background-color: #00162E;    /* color of the scroll thumb */
    border: 3px solid #00162E;  /* creates padding around scroll thumb */
  }


</style>

