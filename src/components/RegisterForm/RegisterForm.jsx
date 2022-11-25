import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrBox,
  StyledForm,
  StyledIconEmail,
  StyledIconMan,
  StyledIconPW,
  StyledInput,
  StyledLable,
  StyledWrapper,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { Button } from 'react-bootstrap';
import { register } from 'redux/Auth/authOperations';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      nameRegExp,
      "*Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3, '*Names must have at least 3 characters')
    .max(40, "*Names can't be longer than 40 characters")
    .required('*Name is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string()
    .min(8, '*Password must have at least 8 characters')
    .max(16, "*Names can't be longer than 16 characters")
    .required('*Phone number required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    dispatch(register(values));
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pt="150px"
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
              <StyledIconEmail />
              <StyledWrapper className="mb-4" controlId="formBasicNumber">
                <StyledLable>Email:</StyledLable>

                <StyledInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? 'error' : null}
                />
                {touched.email && errors.email ? (
                  <ErrBox>{errors.email}</ErrBox>
                ) : null}
              </StyledWrapper>
            </Box>
            <Box display="flex" alignItems="center">
              <StyledIconPW />
              <StyledWrapper className="mb-4" controlId="formBasicNumber">
                <StyledLable>Password:</StyledLable>

                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password ? 'error' : null
                  }
                />
                {touched.password && errors.emapasswordil ? (
                  <ErrBox>{errors.password}</ErrBox>
                ) : null}
              </StyledWrapper>
            </Box>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Box>
  );
};
