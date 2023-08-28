<template>
  <div>
    <CheckBox v-model:price="price" :unit="'EUR'" @new-event="newEventHandler" v-blink />
    <input-username v-model="username" class="test" dpunkt="vue-3-buch">
      <template v-slot:label>
        <label>Benutzername:</label>
      </template>
    </input-username>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import CheckBox from "./components/CheckBox.js";
import CheckBox from "./components/CheckBox.vue";
import InputUsername from "./components/UsernameInput.vue";

export default {
  name: "App",
  // mixins: [myMixin],
  data() {
    return {
      price: 100.0,
      username: ''
    }
  },
  // props: {
  //   price: {
  //     type: Number,
  //     default: 100.0
  //   }
  // },
  components: {
    CheckBox,
    InputUsername
  },
  methods: {
    newEventHandler(event) {
      console.log(event);
    }
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
