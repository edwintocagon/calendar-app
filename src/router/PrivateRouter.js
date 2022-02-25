import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ uid, children }) => {
  return !!uid ? children : <Navigate to="/login" />;
};
