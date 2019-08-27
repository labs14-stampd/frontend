import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Layer } from 'grommet';
import { useStateValue } from 'react-conflux';

import CredCardViewBtn from './CredCardViewBtn';
import CredCardShareBtn from './CredCardShareBtn';
import CredCardSchoolName from './CredCardSchoolName';
import CredCardDateIssued from './CredCardDateIssued';
import CredCardStudentName from './CredCardStudentName';
import CredCardDeleteBtn from './CredCardDeleteBtn';
import emblem from '../../../images/certEmblem.png';
import { globalContext } from '../../../store/reducers/globalReducer';

const CredCard = ({ cred }) => {
  const [{ user }] = useStateValue(globalContext);
  const [show, setShow] = useState();
  const {
    credName,
    criteria,
    ownerName,
    id,
    credHash,
    issuedOn,
    description,
    imageUrl
  } = cred;
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
                <img src={imageUrl || emblem} alt="school seal" />
              </div>
              <h1>{credName}</h1>
              <h3>{description}</h3>
              <h3>
                Issued on:
                {issuedOn}
              </h3>
              <h3>Issued by: [School of the Sequoias]</h3>
              <h2>{ownerName}</h2>
            </section>
          </CertificateArea>
        </Layer>
      )}
      <CredCardSchoolName credName={credName} criteria={criteria} />
      <CredCardDateIssued date={issuedOn} />
      <CredCardStudentName ownerName={ownerName} />
      {user.roleId === '2' ? (
        <CredCardDeleteBtn credId={id} credHash={credHash} />
      ) : (
        <CredCardShareBtn credId={id} />

      )}
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

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 30px 6%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 30px 6%;
  }

  :hover {
    -webkit-box-shadow: 0px 0px 15px -2px rgba(173, 145, 237, 1);
    -moz-box-shadow: 0px 0px 15px -2px rgba(173, 145, 237, 1);
    box-shadow: 0px 0px 15px -2px rgba(173, 145, 237, 1);
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
