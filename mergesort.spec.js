describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([8, 2, 6, 3, 5, 7, 1, 4])).toEqual([
      [8, 2, 6, 3],
      [5, 7, 1, 4],
    ]);
  });
  it('is able to split an array that has an odd amount of elements into two halves', function() {
    // your code here
    expect(split([8, 2, 6, 3, 5, 7, 1, 4, 9])).toEqual([
      [8, 2, 6, 3],
      [5, 7, 1, 4, 9],
    ]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    // test the merging algorithm
  });
});

describe('mergeSort function', function() {
  it('sorts array in ascending order', function() {
    expect(mergeSort([5, 1, 8, 9])).toEqual([1, 5, 8, 9]);
  });
});
