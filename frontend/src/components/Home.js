import styled from "styled-components";
import HomeCard from "./HomeCard";

export default function Home() {
  return (
    <StyledSection>
      <HomeCard>
        <h2>Welcome</h2>
        <p>Have you always wondered what vegans can actually eat and drink?</p>
        <p>Be happy. Finally you get the answer</p>
      </HomeCard>

      <HomeCard>No Video at the mom</HomeCard>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3.75rem;
  padding: 2rem;
`;
