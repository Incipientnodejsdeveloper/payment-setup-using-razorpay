import { Navigate,Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/register" replace />;
    }
  
    return children ? children : <Outlet />;
  };