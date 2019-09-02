import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../styles/themes';
// Subtract pixels to prevent unnecessary vertical scrollbar (accounts for fixed nav bar at the top and other elements)
const Container = styled.main`
  min-height: -webkit-calc(100vh - 200px);
  min-height: -moz-calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  margin: 125px 7.5% 0;
`;

const ContactHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.25em;
  text-align: center;
  margin: 175px 0 15px 0;

  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

const ContactCaption = styled.p`
  font-weight: light;
  font-size: 2rem;
  text-align: center;
  max-width: 75%;
  margin: 0 auto;
`;

const ContactForm = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 120px auto 30px;
  border-radius: 2px;
  width: 100%;
`;

const ContactTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContactBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const ContactFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  padding-left: 10%;

  @media (max-width: 800px) {
    width: 80%;
    margin: 0 auto;
    padding-left: 0;
  }
`;

const ContactFormRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-right: 10%;

  @media (max-width: 800px) {
    width: 80%;
    margin: 0 auto;
    padding-right: 0;
  }
`;
const ContactButton = styled(BaseButton)`
  width: 10%;
  text-align: center;
  margin: 15px 0% 15px 80%;
  @media (max-width: 800px) {
    width: 80%;
    height: 50px;
    margin-left: 10%;
  }
`;

const ContactInputLabel = styled.span`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const StyledSuper = styled.sup`
  margin-left: 2px;
  font-size: 1.75rem;
  font-weight: heavy;
  color: #7d4cdb;
`;

const ContactBaseTextInput = styled(Field)`
  background: transparent;
  width: 100%;
  max-width: 800px;
  padding: 7px 2.5px;
  font-size: 1.8rem;
  font-weight: 700;
  ::placeholder {
    font-size: 1.6rem;
  }
  margin-bottom: 20px;

  @media (max-width: 800px) {
    height: 50px;
  }
`;

const ContactBaseWideInput = styled.textarea`
  background: transparent;
  width: 100%;
  margin: 0 auto;
  rows = "4";
  padding: 7px 2.5px;
  font-size: 1.8rem;
  font-weight: 700;
  ::placeholder {
    font-size: 1.6rem;
  }
`;

function ContactPage({ background }) {
  return (
    <div>
      <ContactHeading>We Want to Hear from You!</ContactHeading>
      <ContactCaption>
        Comments? Questions? Got ideas to make Stampd better? We love hearing
        from our customers! Please take a moment to fill out the form below, and
        a member of the Stampd team will get back ASAP. We respect your privacy,
        and we will NOT share your data with anyone.
      </ContactCaption>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('test');
        }}
      >
        {({ isSubmitting }) => (
          <>
            <ContactForm>
              <ContactTopContainer>
                {' '}
                <ContactFormLeft>
                  {' '}
                  <ContactInputLabel>
                    Name<StyledSuper>*</StyledSuper>
                  </ContactInputLabel>
                  <ContactBaseTextInput type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                  <ContactInputLabel>
                    Title<StyledSuper>*</StyledSuper>
                  </ContactInputLabel>
                  <ContactBaseTextInput type="string" name="title" />
                  <ErrorMessage name="title" component="div" />
                  <ContactInputLabel>
                    Email<StyledSuper>*</StyledSuper>
                  </ContactInputLabel>
                  <ContactBaseTextInput type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </ContactFormLeft>
                <ContactFormRight>
                  <ContactInputLabel>
                    Phone<StyledSuper>*</StyledSuper>
                  </ContactInputLabel>
                  <ContactBaseTextInput type="string" name="phone" />
                  <ErrorMessage name="phone" component="div" />
                  <ContactInputLabel>Position</ContactInputLabel>
                  <ContactBaseTextInput type="string" name="position" />
                  <ErrorMessage name="position" component="div" />
                  <ContactInputLabel>Company</ContactInputLabel>
                  <ContactBaseTextInput type="string" name="company" />
                  <ErrorMessage name="company" component="div" />
                </ContactFormRight>
              </ContactTopContainer>
              <ContactBottomContainer>
                {' '}
                <ContactInputLabel>
                  What Can We Do For You?<StyledSuper>*</StyledSuper>
                </ContactInputLabel>
                <ContactBaseWideInput type="email" name="email" />
              </ContactBottomContainer>
            </ContactForm>
            <ContactButton
              type="submit"
              primary
              label="Submit"
              alignSelf="center"
              disabled={isSubmitting}
            />
          </>
        )}
      </Formik>
    </div>
  );
}

export default ContactPage;
