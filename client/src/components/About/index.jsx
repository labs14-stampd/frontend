import React from 'react';
import styled from 'styled-components';
import { Paragraph } from 'grommet';

import placeHolderMale from '../../images/manph.jpg';
import placeHolderFemale from '../../images/ladyph.png';
// Subtract pixels to prevent unnecessary vertical scrollbar (accounts for fixed nav bar at the top and other elements)
const Container = styled.main`
  min-height: calc(100vh - 200px);
  margin: 125px 7.5% 0;
`;

const AboutHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.25em;
  text-align: center;
  margin: 175px 0 15px 0;

  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

const AboutSubHeading = styled.h3`
  font-size: 3.5rem;
  font-weight: heavy;
  color: black;
  margin: 100px 0 50px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const AboutParagraph = styled.p`
  font-size: 2rem;
  margin-bottom: 5px;
  line-height: 1.5em;
`;

const AboutCaption = styled.p`
  font-weight: light;
  font-size: 2rem;
  text-align: center;
`;

const ParagraphRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: -50px;
  }
`;

const ParagraphCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;

const ParagraphHeading = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  color: #7d4cdb;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ProfileRow = styled.div`
  width: 48%;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
    padding-top: 50px;
    flex-direction: column;
  }
`;
const ProfileCont = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ProfilePic = styled.div`
  margin-top: 20px;
  width: 30%;
  background: ${props => `url(${props.background}) no-repeat  center`};
  background-size: cover;
  height: 175px;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

const ProfileHeading = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  color: #7d4cdb;

  @media (max-width: 800px) {
    text-align: center;
  }
`;
const ProfileText = styled.p`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 5px;
  line-height: 1.5em;
`;

const StampdMail = styled.a`
  color: #7d4cdb;
`;

function AboutPage({ background }) {
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
          <AboutParagraph>
            Stampd has three groups in mind, institutions, students and external
            stakeholders. Institutions can register and then easily begin to
            issue secure, immutable credentials on the blockchain. Students can
            view the credentials they've earned, and share them easily with
            stakeholders, such as prospective employers, graduate schools and
            any other party that might need to verify the credentials that the
            student has earned.
          </AboutParagraph>
        </ParagraphCont>
        <ParagraphCont>
          <ParagraphHeading>Why it Matters</ParagraphHeading>
          <AboutParagraph>
            Unfortunately, credential fraud is a rampant problem. As a result, a
            lot of time, money and effort is spent on trying to verify
            credentials. Worse still is that these costs and difficulties often
            force businesses to make less-than-ideal decisions, such as cutting
            corners when vetting candidates, or even passing on good candidates
            because the verification couldn't be finished in time.
          </AboutParagraph>
        </ParagraphCont>
      </ParagraphRow>
      <ParagraphRow>
        <ParagraphCont>
          <ParagraphHeading>Why Blockchain?</ParagraphHeading>
          <AboutParagraph>
            In recent years, there's been a lot of buzz surrounding blockchain,
            and a lot of that has centered around cryptocurrencies and
            decentralization. While those are very interesting subjects, for us
            at Stampd, what makes blockchain an attractive technology is it's
            immutability. Once something is put on the blockchain, it's all but
            impossible to take it off. Good, bad, it's all there for the world
            to see. By storing credentials on the blockchain, users of Stampd
            are provided with credentials that are better than written-in-stone.
          </AboutParagraph>
        </ParagraphCont>
        <ParagraphCont>
          <ParagraphHeading>We're Here to Help!</ParagraphHeading>
          <AboutParagraph>
            If you have any questions about how Stampd could help you with your
            credentialing needs, please don't hesitate to reach out to us. We
            can be reached at{' '}
            <StampdMail href="mailto:teamstampd@gmail.com">
              teamstampd@gmail.com
            </StampdMail>
            . We'd love to hear from you!
          </AboutParagraph>
        </ParagraphCont>
      </ParagraphRow>
      <AboutSubHeading>The Team</AboutSubHeading>
      <ProfileContainer>
        <ProfileRow>
          <ProfilePic background={placeHolderMale} />
          <ProfileCont>
            <ProfileHeading>Brannan Conrad</ProfileHeading>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </ProfileText>
          </ProfileCont>
        </ProfileRow>
        <ProfileRow>
          <ProfilePic background={placeHolderFemale} />
          <ProfileCont>
            <ProfileHeading>Megan Jeffcoat</ProfileHeading>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </ProfileText>
          </ProfileCont>
        </ProfileRow>
        <ProfileRow>
          <ProfilePic background={placeHolderMale} />
          <ProfileCont>
            <ProfileHeading>Joe Mandado</ProfileHeading>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </ProfileText>
          </ProfileCont>
        </ProfileRow>
        <ProfileRow>
          <ProfilePic background={placeHolderMale} />
          <ProfileCont>
            <ProfileHeading>CJ Tantay</ProfileHeading>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </ProfileText>
          </ProfileCont>
        </ProfileRow>
        <ProfileRow>
          <ProfilePic background={placeHolderMale} />
          <ProfileCont>
            <ProfileHeading>Nathan Thomas</ProfileHeading>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </ProfileText>
          </ProfileCont>
        </ProfileRow>
        <ProfileRow>
          <ProfilePic background={placeHolderMale} />
          <ProfileCont>
            <ProfileHeading>Byron Holmes</ProfileHeading>
            <ProfileText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </ProfileText>
          </ProfileCont>
        </ProfileRow>
      </ProfileContainer>
    </Container>
  );
}

export default AboutPage;
