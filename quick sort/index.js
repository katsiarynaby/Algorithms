function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    let pivot = array[0];

    let less = array.filter( elem => elem < pivot);
    let greater = array.filter( elem => elem > pivot);


return quickSort(less) + pivot + quickSort(greater);
}


quickSort([4,3,6,1,0])