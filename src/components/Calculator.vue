<template>
    <div class="grid-container">
        <Display />
        
        <Button text="AC" color="black" background="lightgray" />
        <Button text="+/-" color="black" background="lightgray" />
        <Button text="%" color="black" background="lightgray" />
        <Button text="/" background="darkorange" />

        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" background="darkorange" />

        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" background="darkorange" />

        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" background="darkorange" />

        <Button class="zero-container" text="0" />
        <Button text="." />
        <Button text="=" background="darkorange" />
    </div>
</template>

<script>
import Button from './Button';
import Display from './Display';

export default {
    name: "Calculator",
    components: {
        Button,
        Display
    }
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto;
    border: 1px solid black;
}

.zero-container {
    grid-column: 1 / 3;
}
</style>