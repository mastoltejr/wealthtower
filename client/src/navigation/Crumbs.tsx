import { Breadcrumbs, Chip } from '@mui/material';
import { emphasize } from '@mui/material/styles';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Dashboard } from '@mui/icons-material';
import { capitalize } from '../util/string';

export interface CrumbsProps {}

const StyledBreadcrumb = styled(Chip)(({ color, theme }) => {
  return {
    height: theme.spacing(3),
    fontWeight: theme.typography.fontWeightRegular
  };
}) as typeof Chip;

const Crumbs = ({}: CrumbsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const active = pathnames.pop();

  const navTo = (path: string) => () => {
    navigate(path);
  };
  return (
    <Breadcrumbs style={{ gridArea: 'crumbs' }} sx={{ px: 3 }}>
      <StyledBreadcrumb
        label='Dashboard'
        onClick={navTo('/')}
        color={!!!active ? 'primary' : 'default'}
        icon={<Dashboard fontSize='small' />}
      />
      {pathnames.map((path, i) => (
        <StyledBreadcrumb
          label={capitalize(path)}
          onClick={navTo(`/${pathnames.slice(0, i + 1).join('/')}`)}
        />
      ))}
      {!!active && (
        <StyledBreadcrumb
          color='primary'
          label={capitalize(active)}
          clickable
        />
      )}
    </Breadcrumbs>
  );
};

export default Crumbs;
