import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";

export const normalizeDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "d MMMM, HH:mm", { locale: ru });
};
