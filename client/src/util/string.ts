export const capitalize = (s: string | undefined): string => {
  if (s === undefined) return '';
  s = s.toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
};
