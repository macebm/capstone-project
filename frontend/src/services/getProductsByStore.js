export default function getProductsByStore(storeId) {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  return fetch(`${apiBaseUrl}/products/store/` + storeId)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
