export default function getProductsByStore(storeId) {
  return fetch("http://plantbase.local/products/store/" + storeId)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
