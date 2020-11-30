import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function HomeCard({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background: ${Colors.cardColor};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: ${FontSizes.medium};
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  width: 80vw;
`;
