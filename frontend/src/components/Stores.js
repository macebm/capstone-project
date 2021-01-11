import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import getStores from "../services/getStores";
import NotFound from "./NotFound";
import Store from "./Store";

export default function Stores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getStores()
      .then((data) => setStores(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Section>
      {stores ? (
        stores.map(({ id, name, postalCode, street }) => (
          <Store
            key={id}
            storeId={id}
            name={name}
            postal_code={postalCode}
            street={street}
          />
        ))
      ) : (
        <NotFound/>
      )}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
  margin-bottom: 3.75rem;
  padding: 2rem;
`;
