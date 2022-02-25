import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Navbar } from "../ui/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { uiOpenModal } from "../../actions/ui";

import { messages } from "../../helpers/calendar-messages-es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "./CalendarEvent";

import {
  eventClearActiveEvent,
  eventSetActive,
  eventStartLoading,
} from "../../actions/events";

import "moment/locale/es";
import { CalendarModal } from "./CalendarModal";
import { AddNewFab } from "../ui/AddNewFab";
import { DeletedEventFab } from "../ui/DeletedEventFab";
import { useSelector } from "react-redux";
moment.locale("es");

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { uid } = useSelector((state) => state.auth);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  useEffect(() => {
    /* no habra limpieza por que se ejcutara solo una vez */
    dispatch(eventStartLoading());
  }, [dispatch]);

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal(true));
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent());
  };

  const eventPropGetter = (event, start, end, isSelected) => {
    /* console.log(event, start, end, isSelected); */

    /* console.log(event); */

    const style = {
      backgroundColor: uid === event.user._id ? "#3637CF7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "black",
    };
    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventPropGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        selectable={true}
        onView={onViewChange}
        view={lastView}
        components={{ event: CalendarEvent }}
      />

      <AddNewFab />
      {activeEvent && <DeletedEventFab />}
      <CalendarModal />
    </div>
  );
};
