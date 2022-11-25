import { Box } from 'components/Box/Box';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Auth/authOperations';
import { selectUsername } from 'redux/Auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);

  return (
    <Box display="flex" alignItems="center">
      <Box as="p" mb={0} mr={3} color="white">
        {name}
      </Box>
      <Button
        variant="secondary"
        type="button"
        border="white"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
