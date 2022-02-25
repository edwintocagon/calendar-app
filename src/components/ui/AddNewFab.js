import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(uiOpenModal(true));
  };

  return (
    <button className="btn btn-primary fab" onClick={onClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
