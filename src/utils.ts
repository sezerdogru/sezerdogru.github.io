export const isDayPassed = (date1: Date, date2: Date): boolean => {
  const day1 = date1.getDate();
  const day2 = date2.getDate();

  const month1 = date1.getMonth();
  const month2 = date2.getMonth();

  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();

  return day2 - day1 === 1 && month1 === month2 && year1 === year2;
};
