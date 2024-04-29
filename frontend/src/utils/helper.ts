import { EMilliseconds } from './enum';

// Date format
export const convertDateFromNumber = (num: number): Date => {
  return new Date(num);
};

export const convertNumberFromDate = (date: Date): number => {
  return date.getTime();
};

export const convertDateToISOString = (date: Date): string => {
  return date.toISOString().substring(0, 10);
};

export const getCurrentTime = (): number => {
  const current = new Date();
  return current.getTime();
};

export const convertTimeToSeconds = (time: number): string => {
  return Math.floor(time / 1000).toString();
};

export const convertTimeToMinutes = (time: number): string => {
  return Math.floor(time / 1000 / 60).toString();
};
export const convertTimeToHours = (time: number): string => {
  return Math.floor(time / 1000 / 60 / 60).toString();
};
export const convertTimeToDays = (time: number): string => {
  return Math.floor(time / 1000 / 60 / 60 / 24).toString();
};
export const convertTimeToDHMS = (time: number): string => {
  if (time < EMilliseconds.minute) {
    return `${convertTimeToSeconds(time)} seconds`;
  }
  if (time < EMilliseconds.hour) {
    return `${convertTimeToMinutes(time)} minutes`;
  }
  if (time < EMilliseconds.day) {
    return `${convertTimeToHours(time)} hours`;
  }
  return `${convertTimeToDays(time)} days`;
};
