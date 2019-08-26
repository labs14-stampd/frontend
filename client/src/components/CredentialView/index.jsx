import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';

import queries from './queries';
import emblem from '../../images/certEmblem.png';

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const CredentialView = ({ match }) => {
  const [credential, setCredential] = useState(null);

  console.log(privateKey);

  useEffect(() => {
    const credFn = async () => {
      try {
        // const decoded = await jwt.verify(match.params.jwt, privateKey);
        // console.log(decoded);
        const { data } = await queries.getCredentialById({
          id: 1
        });
        setCredential(data.getCredentialById);
      } catch (error) {
        console.log(error);
      }
    };
    credFn();
  }, [match.params.jwt]);

  console.log(credential);
  return (
    <div style={{ marginTop: '100px' }}>
      {credential ? (
        <CertificateArea>
          <h1>Transaction hash: {credential.txHash}</h1>
          <section>
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
          </section>
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

const CertificateArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  section {
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
  }

  div {
    width: 375px;
  }
`;

export default CredentialView;
