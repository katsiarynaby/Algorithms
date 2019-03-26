// O(n logn)


function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    let pivot = array[0];

    let less = array.filter(elem => elem < pivot);
    let greater = array.filter(elem => elem > pivot);
//   console.log(less, pivot, greater)

return quickSort(less).concat(pivot, quickSort(greater));
}

// var array = [4,3,6,1,0];
// var newArray = quickSort(array);
// console.log(newArray);


//OR


function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    var pivot = array[0];
    
    var left = []; 
    var right = [];
    
    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    
    return quicksort(left).concat(pivot, quicksort(right));
};

// var unsorted = [23, 45, 16, 37, 3, 99, 22];
// var sorted = quicksort(unsorted);
// console.log('Sorted array', sorted);