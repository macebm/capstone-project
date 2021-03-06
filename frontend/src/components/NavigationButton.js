import styled from "styled-components/macro";
import Colors from "../constants/Colors";

export default function NavigationButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  background: ${Colors.primaryBackground};
  border: none;
  border-radius: 6px;
  color: ${Colors.text};
  padding: 0.5rem 0.6rem;
  text-align: center;
  width: 5rem;

  &:hover {
    color: lightgreen;
  }
`;
