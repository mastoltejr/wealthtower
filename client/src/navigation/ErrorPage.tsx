import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';
import Crumbs from './Crumbs';
import { LayoutGrid } from './Layout';
import SideBar from './SideBar';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <LayoutGrid>
      <SideBar />
      <Crumbs />
      <nav>
        <Typography color='main' variant='h4' sx={{ px: 3 }}>
          Page not found!
        </Typography>
      </nav>
      <Box component='main' id='error-page' sx={{ px: 3 }}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusTex || error.message}</i>
        </p>
      </Box>
    </LayoutGrid>
  );
}
