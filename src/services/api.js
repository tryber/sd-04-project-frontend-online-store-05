export async function getCategories() {
  // implement here
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const categories = await response.json();
  // console.log(categories);
  return categories;
  // return response;
}

// getCategories();

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const response = await fetch(url);
  const categorieId = await response.json();
  // console.log(categorieId);
  return categorieId;
}

// getProductsFromCategoryAndQuery();
