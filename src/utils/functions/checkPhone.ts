const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const checkPhone = (value: string, mask: string) => {
  let result = true;
  for (let i = 0; i < value.length; i += 1) {
    if (numbers.includes(value[i]) && numbers.includes(mask[i])) {
      result = true;
    } else if (!numbers.includes(value[i]) && !numbers.includes(mask[i])) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

export default checkPhone;
