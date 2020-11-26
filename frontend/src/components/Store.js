import styled from "styled-components/macro";
import Colors from "../constants/Colors";

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
  margin: 0 auto 30px auto;
  width: 300px;
  text-align: center;
  background: ${Colors.cardColor};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 5px;
`;
