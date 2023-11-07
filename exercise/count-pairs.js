function countPairs(arr, sum) {
    let pairsCount = 0;
    let complements = new Set();
  
    for (let num of arr) {
      let complement = sum - num;
      if (complements.has(complement)) {
        pairsCount++;
        complements.delete(complement);
      } else {
        complements.add(num);
      }
    }
  
    return pairsCount;
  }