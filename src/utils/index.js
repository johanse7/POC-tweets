export const reduceText = (text, limit) => {
  return `${text.substring(0, limit)}...`;
};

export const getFormatDate = (date) => {
  const time = new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const fullDate = new Date(date).toLocaleString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return `${time} - ${fullDate}`;
};

export const validInputSearch = (value) => {
  const regex = new RegExp('^[a-zA-Z0-9 _!$.%^&*]{1,}$');
  return regex.test(value);
};
