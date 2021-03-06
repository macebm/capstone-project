import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function Header() {
  return (
    <AppHeader>
      plant
      <h3>Base</h3>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background: ${Colors.primaryBackground};
  color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FontSizes.verylarge};
  font-style: italic;
  height: 60px;

  h3 {
    color: ${Colors.text};
  }
`;
