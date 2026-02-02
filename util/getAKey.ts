export const getRandomKey = () => {
  const string = 'abcdefghijklmnopqrstuvwxyz1234567890_-';
  let key = '';
  for (let i = 0; i < 10; i++) {
    key += string.charAt(Math.floor(Math.random() * string.length));
  }
  return key;
};
