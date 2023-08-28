<template>
  <div>
    <slot name="label"><span>Username:</span></slot>
    <input type="text" :value="value" @input="handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  created() {
    console.log('created', this.$attrs['dpunkt']);
  },
  methods: {
    handleInput(e) {
      const value = e.target.value.toLowerCase();
      this.log(value);
      
      if (value !== e.target.value) {
        e.target.value = value;        
      }
      
      this.$emit('input', value);
    }
  }
}
</script>