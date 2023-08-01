arr = [11, 22, 21, 22, 33]
const index = arr.indexOf(22);
if (index > -1)
    arr.splice(index, 1)
console.log(arr);