import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';
import { NavItem, Plus, StyledBtn } from './MainNav.styled';

export const MainNav = ({ handleShow }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn && (
        <StyledBtn variant="primary" onClick={handleShow}>
          <Plus />
        </StyledBtn>
      )}
      <Nav className="me-auto, justify-content-end">
        <NavItem to="/">Home </NavItem>
        {isLoggedIn && <NavItem to="/contacts">Contacts </NavItem>}
      </Nav>
    </>
  );
};
