import styled from "styled-components/macro";
import HomeCard from "./HomeCard";

export default function Home() {
  return (
    <Section>
      <HomeCard>
        <p>Have you always wondered what vegans can actually eat and drink? Here you will find it.</p>
      </HomeCard>

      <HomeCard>
        <h2>Nerdy stuff</h2>
        <iframe
          title="Niko Rittenau"
          width="290px"
          height="200px"
          src="https://www.youtube-nocookie.com/embed/RVW62NidDv8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </HomeCard>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: .2rem;
  margin-bottom: 3.75rem;
  padding: 2rem;
`;
