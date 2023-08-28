<template>
  <div>
    <img v-bind:src="image" />
    <img src="/assets/logo.png" />
  </div>
  <div>
    <img v-bind:src="image" />
    <a :href="url">Ich bin ein Link</a>
  </div>
</template>

<script>
export default {
  name: "AttributeBinding",
  data() {
    return {
      image: "./assets/logo.png",
      url: "https://www.dpunkt.de"
    }
  }
};
</script>
