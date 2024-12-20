export function formatDate(date: string, format: string): string {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "";
  }

  const userLocale = navigator.language;
  const dateString = parsedDate.toLocaleDateString(userLocale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const timeString = parsedDate.toLocaleTimeString(userLocale, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return format.replace(/{date}/g, dateString).replace(/{time}/g, timeString);
}
