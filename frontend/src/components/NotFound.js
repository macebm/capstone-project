import styled from "styled-components/macro";

export default function NotFound() {
    return (
        <NotFoundHeader>Nothing Found</NotFoundHeader>
    )
}

const NotFoundHeader = styled.h3`
    color: white;
`;