import { differenceInYears } from "date-fns";

export function oldAgeCount() {
  const currentDate = new Date();
  const bday = new Date("1999-02-23");

  return differenceInYears(currentDate, bday);
}
