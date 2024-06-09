function dateToAudienceTime(date: Date, use12HourFormat: 12 | 24 = 12): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12;

  let period = "";
  if (use12HourFormat === 12) {
    period = isAM ? "AM" : "PM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  return `${hours}:${formattedMinutes} ${period}`.trim();
}

module.exports = dateToAudienceTime;
