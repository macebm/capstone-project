import styled from "styled-components";

export default function NavigationButton({ children, onClick }) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  width: 8rem;
  height: 3rem;
  border: none;
  box-shadow: 1px 1px 1px black;
  background: #57627a;
  text-align: center;
  color: #ffef0c;
`;
