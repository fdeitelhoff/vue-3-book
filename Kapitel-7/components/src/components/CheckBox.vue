<template>
  <div>
    <div class="checkbox-wrapper" @click="check">
      <div :class="{ checkbox: true, checked: checked }"></div>
      <div class="title">{{ title }}</div>
    </div>
    <button @click="check">Klick mich</button>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0;
      },
    },
    unit: {
      type: String,
      required: true,
      default: "EUR",
    },
  },
  created() {
    console.log("price", this.price, "unit", this.unit);
  },
  data() {
    return {
      checked: true,
      title: "Check me",
    };
  },
  methods: {
    check() {
      this.checked = !this.checked;

      this.$emit("new-event", "test");
    },
  },
};
</script>

<style>
.checkbox-wrapper {
  border: 1px solid black;
}

.checked {
  border: 1px solid green;
}
</style>
