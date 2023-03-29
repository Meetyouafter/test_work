const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const checkPhone = (value: string, mask: string) => {
  let result = true;
  const checkResults: string[] = [];
  for (let i = 0; i < value.length; i += 1) {
    if (numbers.includes(value[i]) && numbers.includes(mask[i]) && checkResults.every(el => el === '+')) {
      result = true;
      checkResults.push('+');
    } else if (!numbers.includes(value[i]) && !numbers.includes(mask[i])) {
      result = true;
      checkResults.push('+');
    } else {
      result = false;
      checkResults.push('-');
    }
  }
  return result;
};

export default checkPhone;
