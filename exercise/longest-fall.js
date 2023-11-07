function longestFall(nums) {
    if (nums.length === 0) return 0;
  
    let longest = 1; 
    let currentLength = 1;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        currentLength++;
        longest = Math.max(longest, currentLength);
      } else {
        currentLength = 1;
      }
    }
  
    return longest;
  }
