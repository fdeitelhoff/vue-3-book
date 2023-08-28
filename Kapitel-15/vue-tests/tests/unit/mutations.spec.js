import mutations from '@/store/mutations';

describe('mutations', () => {
  it('ADD_CART_ITEM', () => {
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
      cart: [],
    };

    const article = {
      id: 1,
      name: "Artikel 3",
      quantity: 0,
      price: 3.0,
    };

    const expectedArticle = { ...article };
    expectedArticle.quantity = 1;
    
    mutations.ADD_CART_ITEM(state, { ...article });
    
    expect(state.articles.length).toBe(2);
    expect(state.cart.length).toBe(1);
    expect(state.cart).toStrictEqual([expectedArticle]);
  });
});