import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project import
import useAuth from 'hooks/useAuth';

// types
import type { GuardProps } from 'types/auth';

// ==============================|| AUTH GUARD ||============================== //

export default function AuthGuard({ children }: GuardProps) {
  // const { isLoggedIn } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('login', {
  //       state: {
  //         from: location.pathname
  //       },
  //       replace: true
  //     });
  //   }
  // }, [isLoggedIn, navigate, location]);

  return children;
}
