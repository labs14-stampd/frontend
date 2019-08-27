import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { Box, Button, Layer } from 'grommet';

function ConfirmationLayerCredView({
  onClose,
  noFunc,
  touched,
  errors,
  status,
  confirmSendEmail
}) {
  useEffect(() => {
    if (status) {
      confirmSendEmail(status.email);
      onClose();
    }
  }, [status, onClose, confirmSendEmail]);

  const handleNo = e => {
    if (typeof noFunc === 'function') {
      noFunc();
    }
    onClose();
  };

  return (
    <Layer position="center" onClickOutside={onClose}>
      <Box pad="large" gap="medium">
        <Form>
          <Input name="email" type="text" placeholder="faker@fake.com" />
          {touched.email && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
          <Box direction="row" gap="medium" align="center">
            <Button type="submit" label="Submit" />
            <Button label="Cancel" primary onClick={handleNo} />
          </Box>
        </Form>
      </Box>
    </Layer>
  );
}

const ConfirmationLayerCredViewWithFormik = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ''
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required()
  }),

  async handleSubmit(values, { setStatus, resetForm }) {
    setStatus(values);
    resetForm();
  }
})(ConfirmationLayerCredView);

ConfirmationLayerCredView.propTypes = {
  onClose: PropTypes.func.isRequired,
  noFunc: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};

const Input = styled(Field)`
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 3%;
  border-radius: 5px;
  font-size: 1.6rem;
  border: 2px solid
    ${({ theme }) => theme.global.colors.confirmationInputBorder};
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;

export default ConfirmationLayerCredViewWithFormik;
