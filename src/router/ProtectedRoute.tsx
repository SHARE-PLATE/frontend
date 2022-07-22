import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const accessToken = true;
  return accessToken ? <Outlet /> : <div>LOGIN FORM</div>;
};

export default ProtectedRoute;
