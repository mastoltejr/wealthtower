import {
  AccountBalance,
  DarkMode,
  Dashboard,
  Home,
  LightMode,
  Payments,
  Settings
} from '@mui/icons-material';
import { IconButton, Stack, useTheme, Box } from '@mui/material';
import { usePaletteToggle } from '../providers/theming/PaletteProvider';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export interface SideBarProps {}

const Aside = styled.aside`
  grid-area: sidebar;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%);
    background-position: 0% 0%;
    background-size: 15px 15px;
    transition: background-position 350ms ease;
  }
  &:hover {
    &:before {
      background-position: 0% -12%;
    }
  }
`;

const Icon = styled(IconButton)`
  display: flex;
  flex-direction: column;
  color: white !important;
`;

const IconTitle = styled.span`
  font-size: 10px;
`;

const SideBar = ({}: SideBarProps) => {
  const theme = useTheme();
  const toggle = usePaletteToggle();
  const navigate = useNavigate();

  const navTo = (path: string) => () => {
    navigate(path);
  };

  return (
    <Aside
      style={{
        background: `linear-gradient(${theme.palette.primary.dark} 15%, ${theme.palette.primary.light} 120%)`
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: 4,
          px: 1,
          zIndex: 2,
          justifyContent: 'space-between',
          height: '100%',
          boxSizing: 'border-box',
          fontSize: '2.2rem'
        }}>
        <Stack direction='column' alignItems='center' gap={2}>
          <Icon size='large' onClick={navTo('/')}>
            <Dashboard sx={{ fontSize: 30 }} />
            <IconTitle>Dashboard</IconTitle>
          </Icon>
          <Icon size='large' onClick={navTo('/accounts')}>
            <AccountBalance sx={{ fontSize: 30 }} />
            <IconTitle>Accounts</IconTitle>
          </Icon>
          <Icon size='large' onClick={navTo('/transactions')}>
            <Payments sx={{ fontSize: 30 }} />
            <IconTitle>Transactions</IconTitle>
          </Icon>
        </Stack>

        {/* <div style={{ flexGrow: 2 }} /> */}
        <Stack direction='column' alignItems='center' gap={2}>
          <Icon size='large' onClick={toggle}>
            {theme.palette.mode === 'dark' ? (
              <LightMode sx={{ fontSize: 30 }} />
            ) : (
              <DarkMode sx={{ fontSize: 30 }} />
            )}
            {theme.palette.mode === 'dark' ? (
              <IconTitle>Light Mode</IconTitle>
            ) : (
              <IconTitle>Dark Mode</IconTitle>
            )}
          </Icon>
          <Icon size='large'>
            <Settings sx={{ fontSize: 30 }} />
            <IconTitle>Settings</IconTitle>
          </Icon>
        </Stack>
      </Box>
    </Aside>
  );
};

export default SideBar;
