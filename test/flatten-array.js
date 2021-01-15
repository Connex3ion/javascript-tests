describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    arr = arr.flat(getArrayDepth(arr)).sort((a,b) => a - b );

    expect(arr).toEqual(expected);
  });
});

// simple function to discern the depth of an array, returns 0 if input is not an array
function getArrayDepth(arr) {
  if(Array.isArray(arr)){
    return  1 + Math.max(...arr.map(getArrayDepth));
  }

  return 0;
}