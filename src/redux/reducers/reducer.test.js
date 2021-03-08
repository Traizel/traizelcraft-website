const rootReducer = require('./_root.reducer');

test('sum of 1 and 2 gives 3', () => {
  expect(rootReducer.current.CurrentCategoryReducer(0, {type: 'SET_CURRENT_CATEGORY', payload: 3})).toBe(3);
});