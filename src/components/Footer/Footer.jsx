import { Box } from 'components/Box/Box';
import { Link } from './Footer.styled';

export const Footer = () => {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom="0"
      left="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50px"
      width="100%"
      bg="white"
    >
      <Box as="span">
        © 2022 created by
        <Link href="https://github.com/saintajax" target="_blank">
          saintajax
        </Link>
      </Box>
    </Box>
  );
};
