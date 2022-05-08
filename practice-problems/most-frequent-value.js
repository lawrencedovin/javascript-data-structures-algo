// Find the most frequent value in a given array and return it.
// [1,2,2,3,4] => [2]

// If there's a tie output all the numbers that are involved in that tie.
// [1,1,2,2,3,4] => [1,2]

// If input is not an integer array throw new Error

// 1. Make function called mostFrequentValue which intakes an int array
// 2. Check if input is int array if not throw Error
// 3. Create frequencyObject to store numbers with their frequency values.
// ie.[1,1,2,2,3,4] => 
/** 
{
    1: 2,
    2: 2,
    3: 1,
    4: 1
} */
// 4. If value exist in frequencyObject add +1 else create the key, value pair.
// 5. Loop through frequencyObject finding the highest value storing it to highestFrequencyValue.
// 6. Create mostFrequencyArray: which stores the most frequent value/s.
// 7. Loop through frequencyObject and append to mostFrequencyArray
// 8. return mostFrequencyArray

const mostFrequentValue = (numbers) => {
    const frequencyObject = {};
    let highestFrequencyValue = 0;
    let mostFrequencyArray = [];

    numbers.forEach(number => {
        if(typeof(number) !== "number") throw new Error("Input needs to be an int array");
        if(frequencyObject[number]) frequencyObject[number] += 1;
        else frequencyObject[number] = 1;
    });
    
    for (const number in frequencyObject) {
        if(frequencyObject[number] > highestFrequencyValue) highestFrequencyValue = frequencyObject[number];
    }

    for(const number in frequencyObject) {
        if(frequencyObject[number] === highestFrequencyValue) mostFrequencyArray = [...mostFrequencyArray, number];
    }

    // console.log('highestFrequencyValue: ', highestFrequencyValue);
    // console.log('frequencyObject: ', frequencyObject);
    // console.log('mostFrequencyArray: ', mostFrequencyArray);
    return mostFrequencyArray
}

mostFrequentValue([1,2,2,3,4]);
mostFrequentValue([1,1,2,2,3,4]);
// mostFrequentValue([1,1,2,2,3,'hello']);