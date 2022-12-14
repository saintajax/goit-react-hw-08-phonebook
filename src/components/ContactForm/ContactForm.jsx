import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrBox,
  StyledForm,
  StyledIconMan,
  StyledIconPhone,
  StyledInput,
  StyledLable,
  StyledWrapper,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Box } from 'components/Box/Box';
import { Button } from 'react-bootstrap';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      nameRegExp,
      "*Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3, '*Names must have at least 3 characters')
    .max(40, "*Names can't be longer than 40 characters")
    .required('*Name is required'),
  // email: Yup.string()
  //   .email('*Must be a valid email address')
  //   .max(100, '*Email must be less than 100 characters')
  //   .required('*Email is required'),
  number: Yup.string()
    .matches(
      phoneRegExp,
      '*Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('*Phone number required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ handleClose }) => {
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    dispatch(addContact(values));
    actions.resetForm();
    actions.setSubmitting(false);
    handleClose();
  };

  const dispatch = useDispatch();

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      // pt="200px"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Box display="flex" alignItems="center">
              <StyledIconMan />
              <StyledWrapper className="mb-4" controlId="formBasicName">
                <StyledLable>Name:</StyledLable>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={touched.name && errors.name ? 'error' : null}
                />
                {touched.name && errors.name ? (
                  <ErrBox>{errors.name}</ErrBox>
                ) : null}
              </StyledWrapper>
            </Box>
            <Box display="flex" alignItems="center">
              <StyledIconPhone />
              <StyledWrapper className="mb-4" controlId="formBasicNumber">
                <StyledLable>Phone number:</StyledLable>

                <StyledInput
                  type="tel"
                  name="number"
                  placeholder="Phone number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number}
                  className={touched.number && errors.number ? 'error' : null}
                />
                {touched.number && errors.number ? (
                  <ErrBox>{errors.number}</ErrBox>
                ) : null}
              </StyledWrapper>
            </Box>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Add contact
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Box>
  );
};
