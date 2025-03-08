var arr0: number[] = [1, 2, 3];
console.log(arr0);

var arr1 = [["hello0", 1], ["hello1"], ["hello2"]];

// coordinate pair x,y
// a tuple is a fixed length array that has defined values for each position in the array
const coord: [number, string] = [1,'2'];
coord[0] = 2;   // ok
//coord[1] = 2;   // not ok
console.log(coord[0]);

const coords1: [number, number][] = [ // this is an array of tuples
    [1,2],
    [-1,3],
    [3,4]
]

console.log(`En coords1[0][1] hay ${coords1[2][1]}`);