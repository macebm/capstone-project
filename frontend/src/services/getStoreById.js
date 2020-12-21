export default function getStoreById(storeId) {
  return fetch("http://plantbase.local/stores/" + storeId)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
