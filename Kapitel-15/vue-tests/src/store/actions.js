const addCartItem = ({ commit }, item) => {
  commit("ADD_CART_ITEM", item);
};

export default {
  addCartItem,
};
