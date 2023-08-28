import { createStore } from "vuex";
import actions from "./actions";
import getters from './getters';
import mutations from "./mutations";

export default createStore({
  state: {
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
    cart: [],
  },
  mutations,
  actions,
  getters,
  modules: {},
});
