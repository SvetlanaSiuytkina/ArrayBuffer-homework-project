import ArrayBufferConverter from '../ArrayBufferConverter';
import { getBuffer } from '../getBuffer';

let converter;

beforeEach(() => {
  converter = new ArrayBufferConverter();
});

test('loading ArrayBuffer using the load method', () => {
  const buffer = getBuffer();
  converter.load(buffer);
  expect(converter.buffer).toBe(buffer);
});

test('the toString method should throw an error if the buffer is not loaded', () => {
  const callToString = () => converter.toString();
  expect(callToString).toThrow('Буфер не загружен');
});

test('converting an ArrayBuffer to a string', () => {
  const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = getBuffer();

  converter.load(buffer);
  const result = converter.toString();

  expect(result).toBe(expectedString);
});

test('', () => {
  expect().toBe();
});



