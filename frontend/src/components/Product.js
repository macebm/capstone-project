import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function Product({ manufacturer, name, price }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <p>{manufacturer}</p>
      <p>{price} €</p>
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
  min-width: 200px;

  h3 {
    font-size: ${FontSizes.large};
  }
`;
