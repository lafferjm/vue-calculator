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

.button-style:active {
    background-color: rgba(0, 0, 0, 0.6);
}

.button-style:hover {
    cursor: pointer;
}
</style>