<template>
  <div>
    <h4>Ihr Warenkorb</h4>
  </div>
  <div>
    <div v-for="article in allArticles" :key="article.id">
      <span style="margin-right: 10px">{{ article.name }}</span>
      <span style="margin-right: 10px">Anzahl: {{ article.quantity }}</span>
      <span style="margin-right: 10px">Gesamt: {{ article.quantity }}</span>
      <span>Kosten: {{ articlePrice(article.id) }} EUR</span>
      <div>
        <button @click="incrementQuantity(article.id)">+</button>
        <button @click="decrementQuantity(article.id)">-</button>
      </div>
    </div>
    <p>
      <span data-testId="finalPrice">Gesamtpreis: {{ finalPrice }} EUR</span>
    </p>
    <p>
      <p>
        Ihr eingegebener Gutschein ist: {{ coupon }}
      </p>
      <label for="coupon">Gutschein:</label>
      <input v-model="coupon" id="coupon" name="coupon" />
    </p>
  </div>
</template>

<script>
export default {
  name: "CartStore",
  data: function () {
    return {
      coupon: "",
    };
  },
  props: {
  },
  computed: {
    allArticles() {
      return this.$store.state.articles;
    },
    finalPrice() {
      const finalPrice = this.allArticles.reduce(
        (sum, a) => sum + a.quantity * a.price,
        0
      );
      return finalPrice;
    },
  },
  methods: {
    incrementQuantity(id) {
      const article = this.allArticles.find((a) => a.id === id);
      article.quantity++;

      // console.log("increment quantity", id, article.quantity);
    },
    decrementQuantity(id) {
      const article = this.allArticles.find((a) => a.id === id);
      if (article.quantity > 1) {
        article.quantity--;
      }

      // console.log("decrement quantity", id, article.quantity);
    },
    articlePrice(id) {
      const article = this.allArticles.find((a) => a.id === id);
      return article.quantity * article.price;
    },
  },
};
</script>
