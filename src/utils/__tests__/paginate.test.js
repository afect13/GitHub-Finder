import { paginate } from "../helpers";
import _ from "lodash";

test("paginate: должен возвращать данные, разделенные на массивы в заданном диапазоне", () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const range = 3;
  const result = paginate(data, range);
  const expected = _.chunk(data, range);
  expect(result).toEqual(expected);
});

test("paginate: должен обрабатывать пустые данные", () => {
  const data = [];
  const range = 5;
  const result = paginate(data, range);
  const expected = _.chunk(data, range);
  expect(result).toEqual(expected);
});

test("paginate: должен возвращать один фрагмент, если диапазон больше, чем длина данных", () => {
  const data = [1, 2, 3, 4];
  const range = 6;
  const result = paginate(data, range);
  const expected = _.chunk(data, range);
  expect(result).toEqual(expected);
});
