import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const isLogged = true;

  if (!isLogged) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};
