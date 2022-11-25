import { Nav } from 'react-bootstrap';
import { NavItem, Plus, StyledBtn } from './MainNav.styled';

export const MainNav = ({ handleShow }) => {
  return (
    <>
      <StyledBtn variant="primary" onClick={handleShow}>
        <Plus />
      </StyledBtn>
      <Nav className="me-auto, justify-content-end">
        <NavItem to="/">Home </NavItem>
        <NavItem to="/contacts">Contacts </NavItem>
      </Nav>
    </>
  );
};
