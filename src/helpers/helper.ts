export const isNotNull = <T>(arg: T | null | undefined): T => {
  if (arg != undefined) {
    return arg;
  }
  throw new Error('Function not implemented.');
};
