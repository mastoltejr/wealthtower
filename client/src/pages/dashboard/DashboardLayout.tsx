import { Outlet } from 'react-router-dom';
import { Box, Theme } from '@mui/material';

export interface DashboardLayoutProps {}

const DashboardLayout = ({}: DashboardLayoutProps) => {
  // TODO Dashboard fast-context go here
  return (
    <>
      <Box
        component='nav'
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 2fr'
          },
          gridTemplateRows: 'auto',
          px: 3,
          py: 1
        }}>
        <h1>Dashboard</h1>
        <div className='filters'>filters</div>
      </Box>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
