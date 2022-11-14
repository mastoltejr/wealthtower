import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { PropsWithChildren } from 'react';
import AccountSummary from './AccountSummary';

export interface DashboardProps {}

const DashboardCard = ({ children }: PropsWithChildren) => (
  <Paper elevation={2} sx={{ px: 3, py: 3 }}>
    {children}
  </Paper>
);

const Dashboard = ({}: DashboardProps) => {
  return (
    <Grid container spacing={2} sx={{ px: 3, py: 2 }}>
      <Grid xs={12} md={5}>
        <DashboardCard>
          <Typography variant='h6' align='center'>
            Wealth Summary
          </Typography>
          <Typography variant='body2' align='center'>
            $123,456,789.00
          </Typography>
          <AccountSummary />
        </DashboardCard>
      </Grid>
      <Grid xs={12} md={7}>
        <DashboardCard>Trendline of total wealth over time</DashboardCard>
      </Grid>
      <Grid xs={12} md={6}>
        <DashboardCard>Recent Spend by Category</DashboardCard>
      </Grid>
      <Grid xs={12} md={6}>
        <DashboardCard>Calendar heat chart</DashboardCard>
      </Grid>
      <Grid xs={12}>
        <DashboardCard>Recent Transactions</DashboardCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
