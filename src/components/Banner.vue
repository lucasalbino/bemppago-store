<template>
    <div id="main-banner">
        <h1>Os melhores adesivos!</h1>
    </div>
</template>

<script>

export default {
    name: "Banner"
}
</script>

<style scoped>
    #main-banner {
        background-image: url(../../public/img/banner.jpg);
        height: 125px;
        background-size: cover;
        background-position: 0 -350px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 25px;
    }

    #main-banner h1 { 
        color: #FFF;
        text-align: center;
        font-size: 45px;
        padding: 20px 40px;
     }

</style>