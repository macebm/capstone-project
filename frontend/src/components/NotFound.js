import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";

export default function NotFound() {
    return (
        <NotFoundHeader>Unfortunately, there was a problem. Please try again later.</NotFoundHeader>
    )
}

const NotFoundHeader = styled.h3`
    color: ${Colors.secondText};
    font-size: ${FontSizes.toolarge};
    text-align: center;
`;