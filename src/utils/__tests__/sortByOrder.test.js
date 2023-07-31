import { sortByOrder } from "../helpers";
import _ from "lodash";
const usersData = [
  { id: 1, repos_url: ["repo1", "repo2", "repo3"] },
  { id: 2, repos_url: ["repo1"] },
  { id: 3, repos_url: ["repo1", "repo2"] },
];

test("sortByOrder: должен сортировать userData в порядке возрастания по количеству репозиториев", () => {
  const order = "ASC";
  const result = sortByOrder(usersData, order);
  const expected = _.reverse(_.sortBy(usersData, (user) => _.size(user.repos_url)));
  expect(result).toEqual(expected);
});

test("sortByOrder: должен сортировать userData в порядке убывания по количеству репозиториев", () => {
  const order = "DESC";
  const result = sortByOrder(usersData, order);
  const expected = _.sortBy(usersData, (user) => _.size(user.repos_url));
  expect(result).toEqual(expected);
});

test("sortByOrder ничего не должен возвращать", () => {
  const order = "INVALID_ORDER";
  const result = sortByOrder(usersData, order);
  expect(result).toBeUndefined();
});
