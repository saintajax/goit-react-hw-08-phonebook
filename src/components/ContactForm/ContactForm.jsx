import { Formik } from 'formik';
import { Label, Input, ContactsForm, Btn } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const dispatch = useDispatch();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ContactsForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </ContactsForm>
    </Formik>
  );
};
