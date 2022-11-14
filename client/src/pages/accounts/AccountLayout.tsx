import { Outlet } from 'react-router-dom';

export interface AccountLayoutProps {}

const AccountLayout = ({}: AccountLayoutProps) => {
  return (
    <>
      <nav>This is the AccountLayout Component </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AccountLayout;
