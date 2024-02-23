import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
  user: User | null;
};

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children, user } = props;
  return user ? children : <Navigate to="/" />;
};
