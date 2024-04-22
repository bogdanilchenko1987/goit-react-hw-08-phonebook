import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Footer,
  FooterHeader,
  FooterHeaderWrapper,
  Main,
} from 'App.styled';

import { AppBar } from './AppBar/AppBar';

export const AppLayout = () => {
  return (
    <Container>
      {/* <Header>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          <Logo>
            <span role="img" aria-label="phone icon">
              📞
            </span>{' '}
            CONTACTS
          </Logo>
        </Link>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}

        </nav>
      </Header> */}
      <AppBar />
      <Main>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer>
        <FooterHeaderWrapper>
          <FooterHeader>CONTACTS</FooterHeader>
        </FooterHeaderWrapper>
      </Footer>
    </Container>
  );
};
