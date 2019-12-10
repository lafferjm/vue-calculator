<template>
    <div class="button-style">
        {{text}}
    </div>
</template>

<script>
export default {
    name: "Button",
    props: ['text']
}
</script>

<style scoped>
.button-style {
    text-align: center;
    vertical-align: center;
    background-color: gray;
    border: 1px solid black;
}
</style>