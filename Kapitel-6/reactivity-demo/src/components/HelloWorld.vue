<template>
  <div>
    <span>Reaktive Daten, die sich verändern: {{ message }}</span>
    <br />
    <button @click="onChangeMessage">Text verändern</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "Ich bin ein Test!",
    };
  },
  methods: {
    onChangeMessage() {
      this.message = "Ich bin die neue Nachricht!";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
