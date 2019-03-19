// max search count == log(list.length)


function BinarySearch(list, item) {
    let start = 0;
    let end = list.length -1;
    let count = 0;
   

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        let guess = list[mid];
        count ++;

        if (guess == item) {
            return `index: ${mid}, search count: ${count}`;
        } 
        if ( guess > item) {
            end = mid - 1;
        }
        if (guess < item) {
            start = mid + 1;
        }    
    }
    return `the list don't have the item, search count ${count}`;
}

//TEST

//max count == 3
let a = BinarySearch([0,1,2,3,4,5,6,7], 6);
console.log(a);
//index: 6, search count: 3


// max count == 4
let b = BinarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,56,78], -1);
console.log(b);
//the list don't have the item, search count 4



// max count == 4
let c = BinarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,56,78], 9);
console.log(c);
//index: 9, search count: 3