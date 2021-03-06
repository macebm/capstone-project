import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function HomeCard({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  align-items: center;
  background: ${Colors.cardColor};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  font-size: ${FontSizes.medium};
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  width: 80vw;
`;
