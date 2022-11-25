import { ContactForm } from 'components/ContactForm/ContactForm';
import Modal from 'react-bootstrap/Modal';

export function ModalAdd({ handleClose, show }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
