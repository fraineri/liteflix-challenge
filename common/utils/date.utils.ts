export function getYearFromDate(date: Date | string | number) {
  console.log("date", date);
  let dateToCheck = date;
  if (!(dateToCheck instanceof Date)) {
    dateToCheck = new Date(date);
  }
  return dateToCheck.getFullYear();
}
