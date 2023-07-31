import _ from "lodash";

export const paginate = (data, range) => {
  return _.chunk(data, range);
};

export const sortByOrder = (usersData, order) => {
  if (order === "ASC") {
    return _.reverse(_.sortBy(usersData, (user) => _.size(user.repos_url)));
  }
  if (order === "DESC") {
    return _.sortBy(usersData, (user) => _.size(user.repos_url));
  }
};
