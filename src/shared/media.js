export const breakpoint = {
  sm: 768,
  md: 992,
  lg: 1200,
};

export const minWidth = Object.keys(breakpoint).reduce(
  (acc, key) => ({
    ...acc,
    [key]: `(min-width: ${breakpoint[key]}px)`,
  }),
  {}
);

export const matches = minWidth => window.matchMedia(minWidth).matches;

const query = Object.keys(breakpoint).reduce(
  (acc, key) => ({
    ...acc,
    [key]: `@media ${minWidth[key]}`,
  }),
  {}
);

export default query;
