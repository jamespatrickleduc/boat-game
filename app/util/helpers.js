//arr1 is a superset of arr2
export const includesArray = (arr1, arr2) => {
  return arr2.reduce((acc, cur) => {
    return arr1.includes(cur) && acc;
  }, true);
};
