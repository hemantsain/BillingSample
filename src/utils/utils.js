import moment from 'moment';

export const getFormattedDate = (format) => {
  return moment().format(format);
};
