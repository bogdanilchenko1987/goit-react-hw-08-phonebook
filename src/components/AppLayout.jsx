import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'App.styled';

import { AppBar } from './AppBar/AppBar';

export const AppLayout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
