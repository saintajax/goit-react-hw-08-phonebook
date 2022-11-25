import { Form } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import styled from 'styled-components';

export const ErrBox = styled.div`
  color: #ff6565;
  padding: 0.5em 0.2em;
  height: 1em;
  position: absolute;
  font-size: 0.8em;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  text-align: left;
  /* padding-top: 2em;
  padding-bottom: 2em; */

  /* @media (min-width: 786px) {
    width: 50%;
  } */
`;

export const StyledWrapper = styled(Form.Group)`
  width: 100%;
`;

export const StyledLable = styled(Form.Label)``;

export const StyledInput = styled(Form.Control)`
  &.error {
    border: 2px solid #ff6565;
  }
`;

export const StyledIconMan = styled(BsFillPersonFill)`
  width: 32px;
  height: 32px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const StyledIconPW = styled(RiLockPasswordFill)`
  width: 32px;
  height: 32px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const StyledIconEmail = styled(MdAlternateEmail)`
  width: 32px;
  height: 32px;
  margin-top: 10px;
  margin-right: 10px;
`;
