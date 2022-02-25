import moment from "moment";

export const prepareEvents = (events = []) => {
  return events.map((el) => ({
    ...el,
    end: moment(el.end).toDate(),
    start: moment(el.start).toDate(),
  }));
};
