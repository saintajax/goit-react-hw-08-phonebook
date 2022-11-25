import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn;

  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
