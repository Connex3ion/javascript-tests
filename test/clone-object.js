describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};
    var obj = Object.assign({}, expected); 
    //could also use JSON.Stringify method JSON.parse(JSON.stringify(expected)) but messy!

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
