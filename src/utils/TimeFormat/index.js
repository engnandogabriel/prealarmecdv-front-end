export function dateFormat(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const formattedDate = date.toISOString().split("T")[0];
  return `${formattedDate}T00:00:00`;
}

export function dateFormatSemSegundos(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
}
