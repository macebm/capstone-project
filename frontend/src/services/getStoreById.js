export default function getStoreById(storeId) {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  return fetch(`${apiBaseUrl}/stores/` + storeId)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
