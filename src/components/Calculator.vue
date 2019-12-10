<template>
    <div class="grid-container">
        <Results />
        
        <Button text="AC" />
        <Button text="+/-" />
        <Button text="%" />
        <Button text="/" />

        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" />

        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />

        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" />

        <Button class="zero-container" text="0" />
        <Button text="." />
        <Button text="=" />
    </div>
</template>

<script>
import Button from './Button';
import Results from './Results';

export default {
    name: "Calculator",
    components: {
        Button,
        Results
    }
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto;
}

.zero-container {
    grid-column: 1 / 3;
}
</style>