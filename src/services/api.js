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

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  // implement here
  let url;
  if (query) url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else if (categoryId) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  else url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(console.error('Nenhum produto foi encontrado!'));
  });
}

// getProductsFromCategoryAndQuery();
