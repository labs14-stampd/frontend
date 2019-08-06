import styled from 'styled-components';

export const theme = {
  main: {
    colors: {
      primary: '#444444',
      secondary: 'palevioletred',
      black: '#444444',
      background: 'silver'
    },
    // fontFamily
    radius: '6px'
  },
  alternative: {}
};

export const Button = styled.button`
  color: ${theme.main.colors.secondary};
  border-radius: ${theme.main.radius};
  border: 1px solid ${theme.main.colors.black};
  font-size: 2rem;
  margin: 2px;
  :hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 3.5rem;
  color: ${theme.main.colors.primary};
  display: inline-block;
  margin: 4px;
  text-decoration: underline;
`;

export const Form = styled.form``;
export const Card = styled.div``;

export const Input = styled.input`
  font-size: 2rem;
  border: 1px solid ${theme.main.colors.black};
  margin: 2px;
`;
