const ADD_CART_ITEM = (state, item) => {
  item.quantity = 1;
  state.cart.push(item);
};

export default {
  ADD_CART_ITEM
};