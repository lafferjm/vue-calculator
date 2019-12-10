<template>
    <div class="grid-container">
        <Display />
        
        <FunctionButton text="AC"/>
        <FunctionButton text="+/-" />
        <FunctionButton text="%" />
        <OperatorButton text="/" />

        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <OperatorButton text="x"/>

        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <OperatorButton text="-" />

        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <OperatorButton text="+" />

        <Button class="zero-container" text="0" />
        <Button text="." />
        <OperatorButton text="=" />
    </div>
</template>

<script>
import Button from './buttons/Button';
import Display from './Display';
import FunctionButton from './buttons/FunctionButton';
import OperatorButton from './buttons/OperatorButton';

export default {
    name: "Calculator",
    components: {
        Button,
        Display,
        FunctionButton,
        OperatorButton
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