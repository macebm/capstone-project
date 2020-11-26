import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function Store({ name, postal_code, street }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <p>{postal_code}</p>
      <p>{street}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${Colors.cardColor};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: ${FontSizes.medium};
  margin: 0 auto 20px auto;
  padding: 5px;
  text-align: center;
  width: 300px;

  h3 {
    font-size: ${FontSizes.large};
  }
`;
