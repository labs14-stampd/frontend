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
      dashBoardBorder: '#adadad',
      dashBoardBg: '#ffffff',
      btnHoverColor: '#81FCED',
      focus: 'accent-4',
      navbarHoverBg: '#ffffff',
      searchBarBorder: '#adadad',
      searchBarColor: '#adadad',
      dashboardNotFoundColor: '#adadad',
      mobileTrashBtnBorder: '#adadad',
      confirmationInputBorder: '#adadad',
      footerColor: '#adadad'
    },
    border: '1px solid rgba(0,0,0,0.33)',
    // fontFamily
    radius: '6px',
    font: {
      family: 'Roboto'
    }
  },
  tab: {
    active: {
      color: 'brand'
    },
    color: '#333333',
    border: {
      color: '#f8f8f8',
      active: {
        color: 'brand'
      }
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
