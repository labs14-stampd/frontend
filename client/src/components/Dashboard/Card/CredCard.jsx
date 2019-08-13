import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Layer } from 'grommet';
import CredCardViewBtn from './CredCardViewBtn';
import CredCardSchoolName from './CredCardSchoolName';
import CredCardDateIssued from './CredCardDateIssued';
import CredCardStudentName from './CredCardStudentName';
import CredCardDeleteBtn from './CredCardDeleteBtn';
import emblem from '../../../images/certEmblem.png';

const CredCard = ({ cred }) => {
  const [show, setShow] = useState();
  const { credName, criteria, ownerName, id } = cred;
  return (
    <CredContainer>
      <CredCardViewBtn getModal={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <CertificateArea>
            <section>
              <div>
                <img src={cred.imageUrl || cred.emblem} alt="school seal" />
              </div>
              <h1>{cred.credName}</h1>
              <h3>{cred.description}</h3>
              <h3>
                Issued on:
                {cred.issuedOn}
              </h3>
              <h3>Issued by: [School of the Sequoias]</h3>
              <h2>{cred.ownerName}</h2>
            </section>
          </CertificateArea>
        </Layer>
      )}
      <CredCardSchoolName credName={credName} criteria={criteria} />
      <CredCardDateIssued />
      <CredCardStudentName ownerName={ownerName} />
      <CredCardDeleteBtn credId={id} />
    </CredContainer>
  );
};

CredCard.propTypes = {
  cred: PropTypes.shape({
    credName: PropTypes.string,
    criteria: PropTypes.string,
    ownerName: PropTypes.string
  })
};

CredCard.defaultProps = {
  cred: {
    credName: '',
    criteria: '',
    ownerName: ''
  }
};

const CredContainer = styled.section`
  margin: 10px auto 0;
  max-width: 1600px;
  width: 100%;
  background: white;
  /* min-height: calc(100vh - 170px); */
  -webkit-box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  border-radius: 2px;
  display: flex;
  /* justify-content: space-between; */
  padding: 20px 0;
  transition: box-shadow 0.5s;

  :hover {
    -webkit-box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
    -moz-box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
    box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
  }
`;

const CertificateArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  section {
    width: 100%;
    background: ${props => props.theme.global.colors.dashBoardBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 37.5px 50px 32.5px;
    margin: 0 auto;

    & > * {
      text-align: center;
      margin-bottom: 15px;
    }

    & > *:first-child {
      max-width: 125px;
      margin-bottom: 50px;
    }

    & > *:last-child {
      margin-top: 25px;
    }
  }

  div {
    width: 375px;
  }
`;

export default CredCard;
