import Accounts from '../pages/accounts/Accounts';
import Dashboard from '../pages/dashboard/Dashboard';
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import AccountLayout from '../pages/accounts/AccountLayout';
import Layout from './Layout';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
      <Route
        path='/'
        element={<DashboardLayout />}
        errorElement={<div>404</div>}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path='/accounts' element={<AccountLayout />}>
        <Route index element={<Accounts />} />
      </Route>
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
