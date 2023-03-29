const removeNonAlphanumeric = (str: string) => {
  const regex = /[^a-zA-Z0-9]+/g;
  return str.replace(regex, '');
};

export default removeNonAlphanumeric;
