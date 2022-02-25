import { Navigate } from "react-router-dom";

export const PublicRouter = ({ children, uid }) => {
  return !!uid ? <Navigate to="/" /> : children;
};
