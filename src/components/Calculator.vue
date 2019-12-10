<template>
    <div class="grid-container">
        <Results />
        
        <div>AC</div>
        <div>+/-</div>
        <div>%</div>
        <div>/</div>

        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>x</div>

        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>

        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>+</div>

        <div class="zero-container">0</div>
        <div>.</div>
        <div>=</div>
    </div>
</template>

<script>
import Results from './Results';

export default {
    name: "Calculator",
    components: {
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