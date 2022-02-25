/* import moment from "moment";
 events: [
    {
      id: new Date().getTime(),
      title: "Cumpleaños del socio",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafa",
      notes: "Comprar el pastel",
      user: {
        _id: "123",
        name: "Fernando",
      },
    },
  ] */
import { types } from "../types/types";

const initialState = {
  events: [{}],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((el) => el.id !== state.activeEvent.id),
        activeEvent: null,
      };

    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };

    case types.eventLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
