export function formatDate(data) {
  const day = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();

  const formatDay = day.toString().padStart(2, "0");
  const formatMonth = month.toString().padStart(2, "0");
  const formatYear = year.toString();

  return `${formatDay}.${formatMonth}.${formatYear}`;
}
