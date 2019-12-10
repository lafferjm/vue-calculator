<template>
    <div class="button-style" :style="style">
        {{text}}
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        color: {
            type: String,
            default: "white"
        },
        background: {
            type: String,
            default: "gray"
        }
    },
    computed: {
        style() {
            return 'color: ' + this.color + ';background-color: ' + this.background + ';';
        }
    }
}
</script>

<style scoped>
.button-style {
    text-align: center;
    vertical-align: center;
    border: 1px solid black;
    padding-top: 10%;
    padding-bottom: 10%;
    font-size: 2em;
}
</style>