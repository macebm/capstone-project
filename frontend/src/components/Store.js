import styled from "styled-components/macro";

export default function Store({ name, postal_code, street }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <p>{postal_code}</p>
      <p>{street}</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto 30px auto;
  width: 300px;
  text-align: center;
  background: #1f2151;
  padding: 5px;
  color: #f7f53f;
  img {
    width: 200px;
  }
`;
