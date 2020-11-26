import styled from "styled-components/macro";
import Colors from "../constants/Colors";
export default function Header() {
  return <Wrapper>App</Wrapper>;
}

const Wrapper = styled.header`
  background: ${Colors.primaryBackground};
  text-align: center;
  color: ${Colors.text};
  padding: 2rem;
`;
