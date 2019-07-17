function split(wholeArray) {
  console.log('WHOLEARRAY:', wholeArray);
  let firstHalf = [];
  let secondHalf = [];
  let middle = Math.floor(wholeArray.length / 2);

  firstHalf = wholeArray.slice(0, middle);
  secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let pointerLeft = 0;
  let pointerRight = 0;
  let result = [];
  while (pointerLeft < arr1.length && pointerRight < arr2.length) {
    if (arr1[pointerLeft] < arr2[pointerRight]) {
      result.push(arr1[pointerLeft]);
      pointerLeft++;
    } else {
      result.push(arr2[pointerRight]);
      pointerRight++;
    }
  }
  while (pointerLeft < arr1.length) {
    result.push(arr1[pointerLeft]);
    pointerLeft++;
  }
  while (pointerRight < arr2.length) {
    result.push(arr2[pointerRight]);
    pointerRight++;
  }

  console.log('arr1', arr1, 'arr2', arr2);
  return result;
}

function mergeSort(array) {
  // split until array = 1
  //base case
  console.log('ARRAY', array);
  if (array.length <= 1) {
    return array;
  } else {
    let [splitResultOne, splitResultTwo] = split(array);
    return merge(mergeSort(splitResultOne), mergeSort(splitResultTwo));
  }

  // compare recursively
  // merge
}
