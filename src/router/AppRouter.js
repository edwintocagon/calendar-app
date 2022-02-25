import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { cheking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (cheking) {
    return <h5> Espere... </h5>;
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <PublicRouter uid={uid}>
                <LoginScreen />
              </PublicRouter>
            }
          />
          <Route
            exact
            path="/*"
            element={
              <PrivateRouter uid={uid}>
                <CalendarScreen />
              </PrivateRouter>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
