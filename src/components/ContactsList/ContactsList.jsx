import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { Button, Table } from 'react-bootstrap';
import { Box } from 'components/Box/Box';
import { useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      pt="56px"
      pb="50px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Filter />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, number }, i) => {
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{name[0].toUpperCase()}</td>
                <td>{name}</td>
                <td>{number}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      dispatch(deleteContact(id));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
};
