import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export default function dateFormat(date) {
  const timeZone = "America/Sao_Paulo";
  const zonedDate = toZonedTime(date, timeZone);
  return format(zonedDate, "dd/MM/yyyy HH:mm");
}
