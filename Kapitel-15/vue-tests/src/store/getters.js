const availableArticles = (state) => {
  return state.articles.filter((article) => article.quantity > 0);
};

export default {
  availableArticles,
};
