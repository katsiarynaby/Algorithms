// O(n logn)
function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    let pivot = array[0];

    let less = array.filter(elem => elem < pivot);
    let greater = array.filter(elem => elem > pivot);
  console.log(less, pivot, greater)

return quickSort(less).concat(pivot, quickSort(greater));
}

var array = [4,3,6,1,0];
var newArray = quickSort(array);
console.log(newArray);