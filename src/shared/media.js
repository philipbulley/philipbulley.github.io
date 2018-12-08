export const breakpoint = {
  sm: 768,
  md: 992,
  lg: 1200,
};

const query = Object.keys(breakpoint).reduce(
  (acc, key) => ({
    ...acc,
    [key]: `@media (min-width: ${breakpoint[key]}px)`,
  }),
  {}
);

export default query;
