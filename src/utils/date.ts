export const getElapsed = (date: Date) => {
  const now = new Date();
  return Math.floor((now.getTime() - date.getTime()) / 1000);
};

export const formatElapsedHHMMSS = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (num: number) => num.toString().padStart(2, "0");

  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
};
