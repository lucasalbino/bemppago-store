<template>
    <nav id="nav">
        <router-link id="logo logo-url" to="/"><img id="img" :src="logo" :alt="alt"> </router-link>
        <router-link id="home" to="/">Home</router-link>
        <router-link id="carrinho" to="/carrinho">Carrinho</router-link>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ['logo', 'alt']
}
</script>

<style>
#nav { 
  border-bottom: 3px solid #0045a0c4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#nav #logo-url {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 20px;
    height: 20px;
}

#img {
    width: 150px;
}

#nav a {
    font-weight: bold;
    color: #0046a0;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

#nav a:hover {
    color: #26A6C2;
}

</style>
