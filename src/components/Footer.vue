<template>
   <footer id="footer">
        <p><a href="www.lucasalbino.com">Lucas Albino</a> &copy; 2022</p>
   </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

#footer {
    height: 170px;
    background-color: #05194c;
    border-top: 3px solid #26A6C2;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 100px;     
    width: 100%;
    color: white;
}

#footer a {
    color: white;
    text-decoration: underline;
}

</style>