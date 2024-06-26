import { useAuth } from 'hooks';
import { StyledLink } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </nav>
    </>
  );
};
