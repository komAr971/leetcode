//2864. Maximum Odd Binary Number

/*
You are given a binary string s that contains at least one '1'.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros.
*/

/**
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = (s) => {
  const oneCount = s.split('').filter((bit) => bit === '1').length;
  const maxOdd = '1'.repeat(oneCount - 1) + '0'.repeat(s.length - oneCount) + '1';
  return maxOdd;
};

console.log('010', maximumOddBinaryNumber('010'), '001');
console.log('0101', maximumOddBinaryNumber('0101'), '1001');
