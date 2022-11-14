import { Box } from '@mui/material';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Crumbs from './Crumbs';

export interface LayoutProps {}

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-rows: 72px 24px calc(100vh - 24px - 72px);
  grid-template-columns: 72px auto;
  grid-template-areas:
    'sidebar titlebar'
    'sidebar crumbs'
    'sidebar main';
  main {
    grid-area: main;
    overflow: auto;
  }
  nav {
    grid-area: titlebar;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 2px -2px;
  }
`;

const Layout = ({}: LayoutProps) => {
  return (
    <LayoutGrid>
      <SideBar />
      <Crumbs />
      <Outlet />
    </LayoutGrid>
  );
};

export default Layout;
