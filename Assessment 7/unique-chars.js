const hasUniqueCharacters = (string) => new Set(string.split("")).size === string.length;

console.log(hasUniqueCharacters("Moonday"));

// Time Complexity: O(n)
// Space Complexity: O(n)