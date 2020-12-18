import styled from "styled-components/macro";
import HomeCard from "./HomeCard";

export default function Home() {
  return (
    <StyledSection>
      <HomeCard>
        <h2>Welcome</h2>
        <p>Have you always wondered what vegans can actually eat and drink?</p>
        <p>Find out:</p>
      </HomeCard>

      <HomeCard>
        <h2>Nerdy stuff</h2>
        <iframe
          title="Niko Rittenau"
          width="290"
          height="200"
          src="https://www.youtube-nocookie.com/embed/RVW62NidDv8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </HomeCard>
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
