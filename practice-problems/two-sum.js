var twoSum = function(nums, target) {
    
    // 2 for loops
    // 1. First number compares to the rest of array.
    // 2. Second number iterates until match is found.
    
    // Loop through array 
    // is [target - number] in array? If not then loop further.
    // Capture indexOf
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++){
            console.log(nums[i]);
            console.log(nums[j]);
        }
    }
};

twoSum([[1,3,5]], 9);