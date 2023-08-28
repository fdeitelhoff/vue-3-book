<template>
  <div>
    <span v-if="isInStock">Der Artikel ist vorrätig!</span>
    <span v-else>Der Artikel ist nicht vorrätig!</span>
  </div>
  <template v-if="isInStock">
    <div>Der Artikel ist vorrätig!</div>
    <div>Es existieren noch {{ stockSize }} Artikel.</div>
  </template>
  <span v-if="stockSize > 5">Der Artikel ist vorrätig!</span>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      isInStock: true,
      stockSize: 10
    }
  },
}
</script>