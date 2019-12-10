<template>
    <div class="button-style">
        {{text}}
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String
    }
}
</script>

<style scoped>
.button-style {
    text-align: center;
    border: 1px solid black;
    padding-top: 10%;
    padding-bottom: 10%;
    font-size: 2em;
    color: white;
    background-color: gray;
}
</style>