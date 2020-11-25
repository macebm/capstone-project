import { useEffect, useState } from "react";
import getStores from "../services/getStores";
import Store from "./Store";

export default function Stores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getStores()
      .then((data) => setStores(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      {stores.map(({ id, name, postalCode, street }) => (
        <Store key={id} name={name} postal_code={postalCode} street={street} />
      ))}
    </div>
  );
}
