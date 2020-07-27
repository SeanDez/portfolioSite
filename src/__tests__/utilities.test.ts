import { createComponentNameFromString } from "../utilities";

test('createComponentNameFromString', () => {
  const testString1 = 'ioi,/r fe.e38v';
  const result = createComponentNameFromString(testString1);
  expect(result).toStrictEqual('IoirFeev');

  const testString2 = '4ioi,/r .fe.e38v';
  const result2 = createComponentNameFromString(testString1);
  expect(result2).toStrictEqual('IoirFeev');
});