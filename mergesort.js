function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  if (wholeArray.length % 2 === 0) {
    let middle = wholeArray.length / 2;
    firstHalf = wholeArray.slice(0, middle);
    secondHalf = wholeArray.slice(middle);
  } else {
    let middle = Math.floor(wholeArray.length / 2);
    firstHalf = wholeArray.slice(0, middle);
    secondHalf = wholeArray.slice(middle);
  }
  return [firstHalf, secondHalf];
}

function merge(arr1, arr,2) {

}

// function mergeSort(array) {

//     /* your code here */

// }