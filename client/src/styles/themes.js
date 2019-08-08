import styled from 'styled-components';
import { Button, Form, TextInput, FormField } from 'grommet';

export const theme = {
  global: {
    colors: {
      // primary: '#444444',
      // secondary: 'palevioletred',
      fontColor: '#333333',
      bodyBackground: '#f8f8f8',
      teal: 'accent-1',
      dashBoardBorder: '#d8d8d8',
      dashBoardBg: '#ffffff',
      btnHoverColor: '#81FCED'
    },

    border: '1px solid rgba(0,0,0,0.33)',
    // fontFamily
    radius: '6px',
    font: {
      family: 'Roboto'
    }
  }
};

export const BaseButton = styled(Button)``;
export const SecondaryButton = styled(Button)`
  color: white;
  border: 1px solid white;
  :hover {
    border: 2px solid white;
  }
`;

export const BaseForm = styled(Form)``;

export const BaseTextInput = styled(TextInput)``;

export const BaseFormField = styled(FormField)``;
