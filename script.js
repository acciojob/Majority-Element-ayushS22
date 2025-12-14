//your code here
function majorityElement(nums) {
  let n = nums.length;
  let majorityCount = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count > majorityCount) {
      return nums[i];
    }
  }
}
