module.exports = function getZerosCount(number, base) {
  // your implementation
  let dividersOfBase = dividers(base);

  let res = number;

  for (key of Object.keys(dividersOfBase)) {
    const divider = Number(key);
    let tNumber = number;
    let tRes = 0;
    while (tNumber >= divider) {
      tNumber = Math.floor(tNumber / divider);
      tRes += tNumber;
    }
    tRes = Math.floor(tRes / dividersOfBase[key]);
    if (tRes === 0) {
      return 0;
    }
    if (tRes < res) {
      res = tRes;
    }
  }
  return res;
}

function dividers(number) {
  let divider = 2;
  let dividers = {};
  while (number != 1) {
    if (number % divider === 0) {
      dividers[divider] = dividers[divider] ? dividers[divider] + 1 : 1;
      number /= divider;
    }
    else {
      divider++; 
    }
  }
  return dividers;
}
