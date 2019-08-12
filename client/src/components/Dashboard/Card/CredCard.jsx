import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CredCardViewBtn from './CredCardViewBtn';
import CredCardSchoolName from './CredCardSchoolName';
import CredCardDateIssued from './CredCardDateIssued';
import CredCardStudentName from './CredCardStudentName';
import CredCardDeleteBtn from './CredCardDeleteBtn';

const CredCard = ({ cred }) => {
  const { credName, criteria, ownerName } = cred;
  return (
    <CredContainer>
      <CredCardViewBtn />
      <CredCardSchoolName credName={credName} criteria={criteria} />
      <CredCardDateIssued />
      <CredCardStudentName ownerName={ownerName} />
      <CredCardDeleteBtn />
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

export default CredCard;
