<template>
  <div>Custom Event Component</div>

  <button @click="onClick">Event</button>
</template>

<script>
export default {
  name: "CustomEvent",
  emits: ['customEvent'],
  methods: {
    onClick() {
      this.$emit('customEvent', "Testdaten");
    }
  },
}

</script>

<style>

</style>