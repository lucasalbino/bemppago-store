<template>
    
    <div class="massage-container">
    {{ msg }}
    </div>
    
</template>

<script>
export default {
    name: 'Mensagem', 
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .massage-container {
        color: #004085;
        background-color: #cce5ff;
        border: 2px solid #88daff;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin-bottom: 30px;
    }
</style>