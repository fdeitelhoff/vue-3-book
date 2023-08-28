<template>
  <div>
    <select v-model="$i18n.locale">
      <option value="de">Deutsch (de)</option>
      <option value="en">Englisch (en)</option>
    </select>
  </div>
  <span>{{ $t("message") }}</span>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  mounted() {
    console.log("locale swticher", this.$i18n);
    this.$i18n.locale = "de";
    console.log("locale swticher", this.$i18n);
  },
};
</script>
