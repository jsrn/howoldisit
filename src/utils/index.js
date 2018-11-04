export const yearsSince = (date) => {
  return Math.floor((new Date() - new Date(date)) / (365 * 60 * 24 * 1000 * 60));
}