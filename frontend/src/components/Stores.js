import { useEffect, useState } from "react";
import styled from "styled-components/macro";
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
    <StyledSection>
      {stores.map(({ id, name, postalCode, street }) => (
        <Store key={id} name={name} postal_code={postalCode} street={street} />
      ))}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
`;
