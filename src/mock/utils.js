const castTimeFormat = (value) => {
  return String(`0${value}`).slice(-2);
};

const formatTime = (date) => {
  let hours = date.getHours();
  const ampm = hours >= 12 ? `pm` : `am`;
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = castTimeFormat(date.getMinutes());

  return `${castTimeFormat(hours)}:${castTimeFormat(minutes)} ${ampm}`;
};

export {formatTime};
