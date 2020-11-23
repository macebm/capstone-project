import styled from "styled-components";

export default function NavigationButton({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border: none;
  box-shadow: 1px 1px 1px black;
  background: #57627a;
  text-align: center;
  color: #ffef0c;
`;
