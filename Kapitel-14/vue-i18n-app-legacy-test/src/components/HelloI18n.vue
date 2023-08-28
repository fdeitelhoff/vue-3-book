<template>
  <p>{{ $t("message") }}</p>
  <p>{{ $d(new Date(), "short") }}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloI18n",
});
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
