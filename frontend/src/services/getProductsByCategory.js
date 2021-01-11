export default function getProductsByCategory(categoryId) {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  return fetch(`${apiBaseUrl}/products/category/` + categoryId)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
