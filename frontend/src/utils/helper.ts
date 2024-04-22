// Date format
export const convertDateToNumber = (num: number): Date => {
  return new Date(num);
};

export const convertNumberToDate = (date: Date): number => {
  return date.getTime();
};

export const convertDateToISOString = (date: Date): string => {
  return date.toISOString().substring(0, 10);
};
