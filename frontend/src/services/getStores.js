export default function getStores() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  return fetch(`${apiBaseUrl}/stores`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
