function sameFrequency(num1, num2) {
    const strNum1 = String(num1);
    const strNum2 = String(num2);

    if (strNum1.length !== strNum2.length) {
      return false;
    }
  
    const countNum1 = {};
    const countNum2 = {};

    for (let digit of strNum1) {
      countNum1[digit] = (countNum1[digit] || 0) + 1;
    }
    for (let digit of strNum2) {
      countNum2[digit] = (countNum2[digit] || 0) + 1;
    }
    for (let key in countNum1) {
      if (countNum1[key] !== countNum2[key]) {
        return false;
      }
    }
    return true;
  }
  