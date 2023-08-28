<template>
  <div>{{ $i18n.locale }}</div>
  <div>{{ $t("message") }}</div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  mounted() {
    console.log("locale swticher", this.$i18n);
    this.$i18n.locale = "fr";
    console.log("locale swticher", this.$i18n);
  },
};
</script>
