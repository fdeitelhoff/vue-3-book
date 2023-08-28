<template>
  <attribute-binding></attribute-binding>
  <conditional-rendering></conditional-rendering>
  <list-rendering></list-rendering>
  <forms-binding></forms-binding>
  <animations-transitions></animations-transitions>
</template>

<script>
import AttributeBinding from "./components/AttributeBinding.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import ListRendering from "./components/ListRendering.vue";
import FormsBinding from "./components/FormsBinding.vue";
import AnimationsTransitions from "./components/AnimationsTransitions.vue";

export default {
  name: "App",
  components: {
    AttributeBinding,
    ConditionalRendering,
    ListRendering,
    FormsBinding,
    AnimationsTransitions,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
