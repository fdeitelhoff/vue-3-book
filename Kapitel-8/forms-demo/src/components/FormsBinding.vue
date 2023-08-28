<template>
  <input v-model="name" placeholder="Veranstaltungsname…" />

  <textarea
    v-model="information"
    placeholder="Informationen zur Veranstaltung…"
  ></textarea>

  <input type="checkbox" v-model="isOnlineEvent" />

  <input type="radio" v-model="isEventSeries" />

  <select v-model="eventLocation">
    <option>Haus 1</option>
    <option>Haus 2</option>
    <option>Haus 3</option>
  </select>

  <input type="button" @click="onSave" value="Speichern"/>
</template>

<script>
export default {
  name: "FormsBinding",
  data() {
    return {
      name: "",
      information: "",
      isOnlineEvent: true,
      isEventSeries: false,
      eventLocation: false
    }
  },
  methods: {
    onSave() {
      console.log(this.$data);
    }
  }
};
</script>

<style scoped></style>
