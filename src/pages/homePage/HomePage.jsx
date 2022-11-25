import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section, Title } from './HomePage.styled';

export const AuthPage = () => {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
};
export const HomePage = () => {
  return (
    <Section>
      <Title>Welcome to Contact Book</Title>
    </Section>
  );
};
