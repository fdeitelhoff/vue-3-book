<template>
  <div class="home">
    <cart :articles="articles"></cart>
    <custom-event @custom-event="customEventHandler"></custom-event>
    <CartComposition :articles="articles"></CartComposition>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import CartComposition from "@/components/CartComposition.vue";
import CustomEvent from '../components/CustomEvent.vue';

export default {
  name: "Home",
  components: {
    Cart,
    CartComposition,
    CustomEvent
},
  data: function () {
    return {
      articles: [
        {
          id: 1,
          name: "Artikel 1",
          quantity: 2,
          price: 1.0,
        },
        {
          id: 2,
          name: "Artikel 2",
          quantity: 3,
          price: 2.0,
        },
      ],
    };
  },
  methods: {
    customEventHandler() {

    },
  },
};
</script>
