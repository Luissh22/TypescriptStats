export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/') // ['28', '10', '2018']
    .map((value: string): number => parseInt(value)); // [28, 10, 2018]

  // year, month - 1, day
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
