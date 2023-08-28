import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";
import getters from "@/store/getters.js";
import Vuex from "vuex";
import { render } from "@testing-library/vue";
import CartStore from "@/components/CartStore.vue";

describe("Vuex", () => {
  it("adds an article to the state via a mutation", () => {
    const article = {
      id: 3,
      name: "Artikel 3",
      quantity: 0,
      price: 11.0,
    };

    const state = {
      cart: [],
    };

    mutations.ADD_CART_ITEM(state, article);

    const expectedState = { cart: [] };
    expectedState.cart.push({
      id: 3,
      name: "Artikel 3",
      quantity: 1,
      price: 11.0,
    });

    expect(state).toEqual(expectedState);
  });

  it("adds an article to the state via an action", async () => {
    const commit = jest.fn();

    const article = {
      id: 3,
      name: "Artikel 3",
      quantity: 0,
      price: 11.0,
    };

    await actions.addCartItem({ commit }, article);

    expect(commit).toHaveBeenCalledWith("ADD_CART_ITEM", article);
  });

  it("returns available articles via a getter", () => {
    const state = {
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

    const actual = getters.availableArticles(state);

    expect(actual).toEqual(state.articles);
  });

  it("uses the articles from the store state", async () => {
    const articles = [
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
    ];
    
    const state = {
      articles
    };

    const store = new Vuex.Store({
      state: state
    });    

    const { getByText } = render(CartStore, {
      global: {
        plugins: [store],
      },
    });

    getByText("Anzahl: " + articles[0].quantity);
    getByText("Anzahl: " + articles[1].quantity);
  });
});
