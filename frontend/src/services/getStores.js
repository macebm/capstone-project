export default function getStores() {
  return fetch("http://plantbase.local/store")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
