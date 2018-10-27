import technologies from './technologies';

it('returns an array', () => {
  expect(technologies instanceof Array).toBe(true);
});

it('is sorted by name', () => {
  expect(isSortedByName(technologies)).toBe(true);
});

function isSortedByName(arr){ //we can just check each element with the next one
  for (let i = 0, n = arr.length - 1; i < n; i++) {
    if (arr[i].name.toLowerCase() > arr[i + 1].name.toLowerCase()) {
      return false;
    }
  }

  return true;
}
