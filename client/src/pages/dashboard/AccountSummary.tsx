import { Theme, Typography, Box } from '@mui/material';
import styled from '@emotion/styled';

export interface AccountSummaryProps {}

const ListItem = styled(Box)`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 0px;
    height: 1px;
    border-bottom: 1px solid lightgrey;
  }
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AccountSummary = ({}: AccountSummaryProps) => {
  return (
    <div>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <ListItem component='li' sx={{ gap: 1, pt: 1, pb: 2 }}>
          <Title>
            <Typography variant='h6' color='primary' noWrap>
              Chase Joint Savings
            </Typography>
            <Typography variant='body2' color='secondary'>
              Chase Joint Savings
            </Typography>
          </Title>
          <div className='amount'>
            <Typography variant='h6' color='primary'>
              $1,315,204.54
            </Typography>
          </div>
        </ListItem>
        <ListItem component='li' sx={{ gap: 1, pt: 1, pb: 2 }}>
          <Title>
            <Typography variant='h6' color='primary' noWrap>
              Chase Joint Savings
            </Typography>
            <Typography variant='body2' color='secondary'>
              Chase Joint Savings
            </Typography>
          </Title>
          <div className='amount'>
            <Typography variant='h6' color='primary'>
              $1,315,204.54
            </Typography>
          </div>
        </ListItem>
      </ul>
    </div>
  );
};

export default AccountSummary;
