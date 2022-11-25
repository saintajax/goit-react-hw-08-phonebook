import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { Footer } from 'components/Footer/Footer';
import { Box } from 'components/Box/Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalAdd } from 'components/modalAdd/ModalAdd';
import { MainNav } from 'components/MainNav/MainNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

export const Layout = () => {
  const [show, setShow] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Box as="header" position="fixed" top="0" width="100%">
        <ToastContainer />
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <MainNav handleShow={handleShow} />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Container>
        </Navbar>
      </Box>
      <Outlet />
      <Footer />
      {show && <ModalAdd handleClose={handleClose} show={show} />}
    </>
  );
};
