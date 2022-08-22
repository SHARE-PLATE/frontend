export const getNumberInString = (string: string) => {
  const checkNumber = /[0-9]/g;
  const result = Number(string.match(checkNumber)?.join(''));
  return result;
};
