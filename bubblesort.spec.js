describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts in order", function() {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it("elements should be numbers", function() {
    const arr = ["a", "b"];
    for (let i = 0; i < arr.length; i++) {
      expects(typeof arr[i]).toEqual(jasmine.any(Number));
    }
  });
});
