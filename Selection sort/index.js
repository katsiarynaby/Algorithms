// max search count == O(n^2)

// search function min element in array

function searchMin (array) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            minIndex = i;
        }
    }
    return minIndex;
}

function selectionSort(array) {
    let  newArray = [];
    while (array.length) {
        let minIndex = searchMin(array);
        let deleteElement = array.splice(minIndex, 1);
        // console.log(`array: ${array}`);
        newArray.push(deleteElement[0]);
    }

    return newArray;
}


// TEST

var firstArray = [7,8,1,2,0,3,5,9];
console.log(`first array: ${firstArray}`);

var newArray = selectionSort(firstArray);
console.log(`newArray: ${newArray}`);


// OR work with one array

function selectionSortinArray(array) {
    var temp;

    for(var i = 0; i < array.length; i++){
        var mi = i;
        
        for(var j = i + 1; j<array.length; j++) {
            if(array[j] < array[mi])
                mi = j;
        }

        temp = array[i];
        array[i] = array[mi];
        array[mi] = temp;
    }
    return array
};

var array = [7,8,1,2,0,3,5,9];
console.log(`first array: ${array}`);

selectionSortinArray(array);
console.log(`newArray: ${array}`);


