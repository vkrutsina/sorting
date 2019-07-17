function bubbleSort(arr) {
  /* your code here */
  if (array.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      let currentEle = arr[i];

      toCompare(currentEle, currentEle + 1, arr);
    }
  }
  return arr;
}

function toCompare(firstEle, secondEle, arr) {
  if (firstEle > secondEle) {
    swap(firstEle, secondEle);
  }
}

function swap(firstEle, secondEle, arr) {
  let goingLeft = arr[i - 1];
  let goingRight = arr[i + 1];
  goingRight = arr[i];
  goingLeft = arr[i + 1];
}
