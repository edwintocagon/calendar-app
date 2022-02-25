import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">{name}</span>

      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sing-out-alt"></i>

        <span> Salir</span>
      </button>
    </div>
  );
};
