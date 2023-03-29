const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const modifyNumber = (number: string, mask: string) => {
  let result = '';
  let numberIndex = 0;
  for (let maskIndex = 0; maskIndex < mask.length; maskIndex += 1) {
    if (numbers.includes(mask[maskIndex])) {
      if (number[numberIndex] === undefined) {
        result += '';
        numberIndex += 1;
      } else {
        result += number[numberIndex];
        numberIndex += 1;
      }
    } else if (maskIndex > number.length) {
      result += '';
    } else {
      result += mask[maskIndex];
    }
  }
  return result;
};

const getModifyPhones = (phones: string[], mask: string) => {
  const modifyPhones = phones.map(el => modifyNumber(el, mask));
  return modifyPhones;
};

export default getModifyPhones;
