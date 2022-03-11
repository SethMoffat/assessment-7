function findLongestWord(array) {
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i].length > result) result = array[i].length;
    }

    return result;
}

console.log(findLongestWord(["hi", "hello", "", "wehf"]));

// Time Complexity: O(n)
// Space Complexity: O(1)