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

function merge(arr1, arr2) {
  return [...arr1, ...arr2];
}

function mergeSort(array) {
  // split until array = 1
  //base case
  if (array.length <= 1) {
    return array;
  } else {
    return merge(mergeSort(split(array[0])), mergeSort(split(array[1])));
  }

  // compare recursively
  // merge
}
