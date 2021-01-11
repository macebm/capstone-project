import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function HomeCard({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  align-items: center;
  color: ${Colors.secondText};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  font-size: ${FontSizes.large};
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  width: 80vw;
`;
