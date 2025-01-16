export const postedAt = (date: string): string => {
  const now = new Date();
  const createdDate = new Date(date);
  const diffInSeconds = Math.floor(
    (now.getTime() - createdDate.getTime()) / 1000
  );

  const years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
  const months = Math.floor(diffInSeconds / (60 * 60 * 24 * 30));
  const days = Math.floor(diffInSeconds / (60 * 60 * 24));
  const hours = Math.floor(diffInSeconds / (60 * 60));
  const minutes = Math.floor(diffInSeconds / 60);

  if (years > 0) return `${years}y Ago`;
  if (months > 0) return `${months}m Ago`;
  if (days > 0) return `${days}d Ago`;
  if (hours > 0) return `${hours}hr Ago`;
  if (minutes > 0) return `${minutes}m Ago`;

  return "Just now";
};
