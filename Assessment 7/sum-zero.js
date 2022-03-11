function addToZero(array) {
    if(array.length <= 1) return false;

    const stored = [];
    for(let i = 0; i < array.length; i++) {
        if(stored.includes(array[i] * -1)) return true;
        stored.push(array[i]);
    }

    return false;
}
function addToZeroRevised(arr) {
    if(arr.length <= 1) return false;

    const stored = {};

    for(let i = 0; i < arr.length; i++) {
        if(stored[arr[i] * -1]) return true;
        stored[arr[i]] = arr[i];
    }

    return false;
}
console.log(addToZeroRevised([1, 2, 3]));