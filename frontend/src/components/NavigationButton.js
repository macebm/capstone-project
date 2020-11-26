import styled from "styled-components/macro";
import Colors from "../constants/Colors";

export default function NavigationButton({ children, onClick }) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  background: #57627a;
  border: none;
  border-radius: 6px;
  color: ${Colors.text};
  height: 2.5rem;
  text-align: center;
  width: 8rem;
`;
