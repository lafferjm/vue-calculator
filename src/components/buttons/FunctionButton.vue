<script>
import Button from './Button';

export default {
  name: "FunctionButton",
  extends: Button,
  methods: {
    sendClick: function(buttonText) {
      this.$store.commit('callFunctional', buttonText);
    }
  }
}
</script>

<style scoped>
.button-style {
  color: black;
  background: lightgray;
  text-align: center;
  border: 1px solid black;
  padding-top: 10%;
  padding-bottom: 10%;
  font-size: 2em;
}

.button-style:active {
    background-color: rgba(0, 0, 0, 0.6);
}

.button-style:hover {
  cursor: pointer;
}
</style>