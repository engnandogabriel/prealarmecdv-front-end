export default function dateFormat(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset()); // Ajuste UTC

  // Retorna a data no formato YYYY-MM-DDT00:00:00
  const formattedDate = date.toISOString().split("T")[0];
  return `${formattedDate}T00:00:00`;
}
