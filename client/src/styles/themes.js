import styled from 'styled-components';
import { Button, Form, TextInput, FormField } from 'grommet';

export const theme = {
  global: {
    colors: {
      // primary: '#444444',
      // secondary: 'palevioletred',
      // black: '#444444',
      // background: 'silver',
      banana: 'crimson',
      accent: 'accent-1'
    },
    border: '1px solid rgba(0,0,0,0.33)',
    // fontFamily
    radius: '6px'
  }
};

export const BaseButton = styled(Button)`
  color: white;
  border: 1px solid white;
  :hover {
    border: 2px solid white;
  }
`;

export const BaseForm = styled(Form)``;

export const BaseTextInput = styled(TextInput)`
  border: ${theme.global.border};
`;

export const BaseFormField = styled(FormField)``;
