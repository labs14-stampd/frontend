import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import { Anchor, Stack } from 'grommet';

import queries from './queries';
import emblem from '../../images/certEmblem.png';

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const CredentialView = ({ match }) => {
  const [credential, setCredential] = useState(null);

  useEffect(() => {
    const credFn = async () => {
      try {
        const { credId } = await jwt.verify(match.params.jwt, privateKey);
        const { data } = await queries.getCredentialById({
          id: credId
        });
        setCredential(data.getCredentialById);
      } catch (error) {
        console.log(error);
      }
    };
    credFn();
  }, [match.params.jwt]);

  return (
    <div style={{ marginTop: '100px' }}>
      {credential ? (
        <CertificateArea>
          <TopSection>
            <h3>
              Verified credential for 
              {credential.ownerName}
            </h3>
              <p>verify transaction hash <span className="short"> {credential.txHash.slice(0, 6)}... </span> to the Ethereum network using <Anchor a11yTitle="Etherscan verification" target="_blank" color="brand" label="Etherscan" href={`https://rinkeby.etherscan.io/tx/${credential.txHash}`}>Etherscan</Anchor></p>    
            <p>Status: {credential.valid ? (<Valid>Valid</Valid>) : (<NotValid>Not Valid</NotValid>)}</p>
            <p>Expiration date: {credential.expirationDate || "none"}</p>
          </TopSection>
          <BottomSection>
            <div>
              <img src={credential.imageUrl || emblem} alt="school seal" />
            </div>
            <h1>{credential.credName || '[Credential Name]'}</h1>
            <h3>{credential.description || '[Description]'}</h3>
            <h3>
              Issued on:
              {credential.issuedOn || ' [August 10, 2019]'}
            </h3>
            <h3>
              Issued by:
              {credential.name}
            </h3>
            <h2>{credential.ownerName || 'John Doe'}</h2>
          </BottomSection>
          {/* DO NOT DELETE - ghost div for alignment */}
          <div />
        </CertificateArea>
      ) : (
        <h1>Credential does not exist</h1>
      )}
    </div>
  );
};

// CredentialView.defaultProps = {
//   match: {
//     params: {
//       jwt: ''
//     }
//   }
// };

// CredentialView.propTypes = {
//   match: PropTypes.shapeOf({
//     params: PropTypes.shapeOf({
//       jwt: PropTypes.string
//     })
//   })
// };

const OurHouse = styled(Stack)`
  .long {
    display: none;
    color: white;
    background-color: black;
  }
  .short {
    z-index: 99;
    color: red;
    &:hover {
     color: green;
    }
  }
`;

const Valid = styled.span`
  color: green;
  font-size: 1.6rem;
  font-weight: 700;
`;
const NotValid = styled.span`
  color: red;
  font-size: 1.6rem;
  font-weight: 700;
`;

const CertificateArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const BottomSection = styled.section`
  width: calc(100% - 500px);
  max-width: 1000px;
  background: ${props => props.theme.global.colors.dashBoardBg};
  border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
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

  div {
    width: 375px;
  }
`;

const TopSection = styled.section`
  width: calc(100% - 500px);
  max-width: 1000px;
  background: ${props => props.theme.global.colors.dashBoardBg};
  border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37.5px 50px 32.5px;
  margin: 0 auto;
`;

export default CredentialView;
