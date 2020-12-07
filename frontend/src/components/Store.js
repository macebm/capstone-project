import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function Store({ storeId, name, postal_code, street }) {
  //const storeLink = "/" + name;

  return (
    <Wrapper to={"/stores/" + storeId}>
      <h3>{name}</h3>
      <p>{postal_code}</p>
      <p>{street}</p>
    </Wrapper>
  );
}

const Wrapper = styled(NavLink)`
  background: ${Colors.cardColor};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: black;
  font-size: ${FontSizes.medium};
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  width: 300px;

  h3 {
    font-size: ${FontSizes.large};
  }
`;
