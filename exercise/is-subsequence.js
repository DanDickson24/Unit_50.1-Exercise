function isSubsequence(str1, str2) {
    let str1Index = 0;
    let str2Index = 0;
  
    if (str1.length === 0) return true;
  
    while (str2Index < str2.length) {
      if (str2[str2Index] === str1[str1Index]) {
        str1Index++;
      }
  
      if (str1Index === str1.length) return true;

      str2Index++;
    }

    return false;
  }

  