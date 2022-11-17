import { List, Item, Text, Link, Btn } from './ContactsList.styled';
import { ReactComponent as DelIcon } from '../icons/delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <List component="ul">
      {contacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Text component="ul">
              {name}: <Link href={`tel:${phone}`}>{phone}</Link>
            </Text>
            <Btn
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              <DelIcon width="40" height="40" fill="black" />
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
