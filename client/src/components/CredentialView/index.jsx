import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import { Anchor } from 'grommet';
import { Clipboard } from 'grommet-icons';

import queries from './queries';
import emblem from '../../images/certEmblem.png';

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const CredentialView = ({ match }) => {
  const [credential, setCredential] = useState(null);
  const [toggleHash, setToggleHash] = useState(false);

  useEffect(() => {
    const credFn = async () => {
      try {
        const { credId } = await jwt.verify(match.params.jwt, privateKey);
        const { data } = await queries.getCredentialById({
          id: credId
        });
        setCredential(data.getCredentialById);
      } catch (error) {
        console.error(error);
      }
    };
    credFn();
  }, [match.params.jwt]);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(credential.txHash);
    toast.success(`Copied to clipbooard`, {
      className: 'brand-background',
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 5000
    });
  };

  return (
    <Container>
      {credential ? (
        <CertificateArea>
          <TopSection>
            <h3>Verified credential for {credential.ownerName}</h3>
            <p>
              Status:{' '}
              {credential.valid ? (
                <Valid>Valid</Valid>
              ) : (
                <NotValid>Not Valid</NotValid>
              )}
            </p>
            <p>Expiration date: {credential.expirationDate || 'None'}</p>
            <TxHash>
              <p>
                See the transaction on{' '}
                <Anchor
                  a11yTitle="Etherscan verification"
                  target="_blank"
                  color="brand"
                  label="Etherscan"
                  href={`${process.env.REACT_APP_ETHERSCAN}${credential.txHash}`}
                >
                  Etherscan
                </Anchor>
              </p>
              Copy the transaction hash of{' '}
              <span
                onClick={copyToClipBoard}
                className="short"
                onMouseEnter={() => setToggleHash(true)}
                onMouseLeave={() => setToggleHash(false)}
              >
                {credential.txHash.slice(0, 6)}...
              </span>
              {toggleHash && (
                <span
                  onClick={copyToClipBoard}
                  className="long"
                  onMouseEnter={() => setToggleHash(true)}
                  onMouseLeave={() => setToggleHash(false)}
                >
                  {credential.txHash} <Clipboard color="white" size="small" />
                </span>
              )}
            </TxHash>
          </TopSection>
          <BottomSection>
            <div>
              <img src={credential.imageUrl || emblem} alt="school seal" />
            </div>
            <h1>{credential.credName || '[Credential Name]'}</h1>
            <h3>{credential.description || '[Description]'}</h3>
            <h3>
              Issued on{" "}
              {credential.issuedOn || ' [August 10, 2019]'}
            </h3>
            <h3>
              Issued by{" "}
              {credential.schoolsUserInfo.schoolDetails.name}
            </h3>
            <h2>{credential.ownerName || 'John Doe'}</h2>
          </BottomSection>
          {/* DO NOT DELETE - ghost div for alignment */}
          <div />
        </CertificateArea>
      ) : (
        <h1>Credential does not exist</h1>
      )}
    </Container>
  );
};

CredentialView.propTypes = {
  match: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const TxHash = styled.p`
  position: relative;

  .long {
    color: white;
    padding: 10px;
    background-color: #333;
    position: fixed;
    border-radius: 5px;
    cursor: pointer;
  }
  .short {
    z-index: 99;
    color: green;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
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
  width: 100%;
  max-width: 1000px;
  background: ${props => props.theme.global.colors.dashBoardBg};
  border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37.5px 50px 32.5px;
  margin: 0 auto 50px;

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
  width: 100%;
  max-width: 1000px;
  background: ${props => props.theme.global.colors.dashBoardBg};
  border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37.5px 50px 32.5px;
  margin: 0 auto 50px;

  h3 {
    margin-bottom: 15px;
    font-weight: 500;
  }

  p {
    margin-bottom: 10px;
    text-align: center;
  }
`;

const Container = styled.div`
  margin: 120px auto 0;
  padding: 0 3%;
  max-width: 1600px;
  width: 100%;
  min-height: calc(100vh - 150px);
`;

export default CredentialView;
