export function getYearFromDate(date: Date | string | number) {
  let dateToCheck = date;
  if (!(dateToCheck instanceof Date)) {
    dateToCheck = new Date(date);
  }
  return dateToCheck.getFullYear();
}
