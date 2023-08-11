import dayjs from 'dayjs';

interface GetDefaultClampedDate {
  minDate: Date | undefined;
  maxDate: Date | undefined;
}

export function getDefaultClampedDate({ minDate, maxDate }: GetDefaultClampedDate) {
  const today = new Date();

  if (!minDate && !maxDate) {
    return today;
  }

  if (minDate && dayjs(today).isBefore(minDate)) {
    return minDate;
  }

  if (maxDate && dayjs(today).isAfter(maxDate)) {
    return maxDate;
  }

  return today;
}
