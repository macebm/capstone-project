import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function ProductWithStore({
  manufacturer,
  name,
  price,
  store,
  postalCode,
  street,
}) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <p>Manufacturer: {manufacturer}</p>
      <p>Price: {price} €</p>
      <p>Store: {store}</p>
      <p>Postal code: {postalCode}</p>
      <p>Street: {street}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${Colors.cardColor};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: black;
  font-size: ${FontSizes.medium};
  padding: 5px;
  text-align: center;
  width: 355px;

  h3 {
    font-size: ${FontSizes.large};
  }
`;
