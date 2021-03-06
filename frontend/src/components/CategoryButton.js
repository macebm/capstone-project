import styled from "styled-components/macro";
import Colors from "../constants/Colors";

export default function CategoryButton({ id, children, onClick }) {
  return <Button onClick={() => onClick(id)}>{children}</Button>;
}

const Button = styled.button`
  background: ${Colors.primaryBackground};
  border: none;
  border-radius: 6px;
  color: ${Colors.text};
  padding: 0.2rem 0.3rem;
  width: 355px;

  &:hover {
    background: ${Colors.text};
    color: black;
  }
`;
