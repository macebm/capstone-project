import styled from "styled-components";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function Product({ manufacturer, name, price }) {
  return (
    <Wrapper>
      <h3>{manufacturer}</h3>
      <p>{name}</p>
      <p>{price} €</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${Colors.primaryBackground};
  border-radius: 6px;
  box-shadow: 2px 2px black;
  display: flex;
  font-size: ${FontSizes.medium};
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px;
  min-width: 200px;
`;
