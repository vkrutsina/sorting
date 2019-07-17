function bubbleSort(arr) {
  /* your code here */
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      let currentEle = arr[i];
      if (toCompare(currentEle, currentEle + 1)) {
        // returns true if first ele is larger than second, else false
        swap(arr, i);
      }
    }
  }
  return arr;
}

function toCompare(firstEle, secondEle) {
  if (firstEle > secondEle) {
    return true;
  } else {
    return false;
  }
}

function swap(arr, curIdx) {
  // first ele is larger than second
  // store what we're replacing
  // replace the right with the left
  // place what we stored into the left

  let firstEle = arr[curIdx + 1];
  let secondEle = arr[i - 1];

  return arr.splice(secondEle, 1, firstEle);

  // goingRight = arr[i];
  // goingLeft = arr[i + 1];
}
