import React from 'react';
import styled from 'styled-components';
import { Paragraph } from 'grommet';

// Subtract pixels to prevent unnecessary vertical scrollbar (accounts for fixed nav bar at the top and other elements)
const Container = styled.main`
  min-height: calc(100vh - 200px);
  margin: 125px 7.5% 0;
`;

const AboutHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.25em;
  text-align: center;
  margin-bottom: 15px;
  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

const AboutSubHeading = styled.h3`
  font-size: 3.5rem;
  font-weight: heavy;
  color: #7d4cdb;
  margin: 25px 0 50px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const AboutParagraph = styled.p`
  font-size: 2rem;
  width: 45%;
  margin-bottom: 5px;
`;

const AboutCaption = styled.p`
  font-weight: light;
  font-size: 2rem;
  text-align: center;
`;

const ParagraphCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const ParagraphRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ParagraphHeading = styled.h4`
  font-size: 1.5rem;
`;

function AboutPage() {
  return (
    <Container>
      <AboutHeading>Helping People Secure What They've Earned.</AboutHeading>
      <AboutCaption>
        Stampd provides convenient, blockchain-secured credentials for
        institutions, students and other stakeholders.
      </AboutCaption>
      <AboutSubHeading>The App</AboutSubHeading>
      <ParagraphRow>
        <ParagraphCont>
          <ParagraphHeading>What Stampd Does</ParagraphHeading>
          <AboutParagraph> Some text goes here</AboutParagraph>
        </ParagraphCont>
        <ParagraphCont>
          <ParagraphHeading>Why it Matters</ParagraphHeading>
          <AboutParagraph> Some text goes here</AboutParagraph>
        </ParagraphCont>
      </ParagraphRow>
      <ParagraphRow>
        <ParagraphCont>
          <ParagraphHeading>Why Blockchain?</ParagraphHeading>
          <AboutParagraph> Some text goes here</AboutParagraph>
        </ParagraphCont>
      </ParagraphRow>
    </Container>
  );
}

export default AboutPage;
