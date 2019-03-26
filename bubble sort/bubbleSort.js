// O(n^2)

function bubbleSort(array) {
let swapped;
    do {
        swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                 swapped = true;
            }
        }
    } while (swapped);
    return array;
};

//TEST

// let a = [33, 103, 3, 726, 200, 9, 198, 764, 9];
// bubbleSort(a);
// console.log(a);


// let array = [3,6,4,8,1];
// let newArray = bubbleSort(array);
// console.log(newArray);