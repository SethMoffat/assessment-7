const isPangram = (string) => new Set(string.toLowerCase().split("").filter((char) => /[a-z]/.test(char))).size === 26;
const word = 0
console.log(isPangram("The quick brown fo jumps over the lazy dog!"));

// Time Complexity: O(n)
// Space Complexity: O(n)