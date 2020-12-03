export default function getStores() {
  return fetch("http://plantbase.local/stores")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
