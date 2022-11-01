const checkCharacter = (string: string) => {
  const characterExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
  const isCharacter = characterExp.test(string);
  return isCharacter;
};

export default checkCharacter;
