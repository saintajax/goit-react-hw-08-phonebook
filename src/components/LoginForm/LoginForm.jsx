import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrBox,
  StyledForm,
  StyledIconMan,
  StyledIconPW,
  StyledInput,
  StyledLable,
  StyledWrapper,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { Button } from 'react-bootstrap';

import { logIn } from 'redux/Auth/authOperations';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string().required('*Password required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    dispatch(logIn(values));
    actions.resetForm();
    actions.setSubmitting(false);
  };

  const dispatch = useDispatch();

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pt="200px"
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
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="Phone number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password ? 'error' : null
                  }
                />
                {touched.password && errors.password ? (
                  <ErrBox>{errors.password}</ErrBox>
                ) : null}
              </StyledWrapper>
            </Box>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Box>
  );
};
