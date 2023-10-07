export const gitHubApi = "https://api.github.com/search/";

export const fetchUsersData = async (login) => {
  try {
    const response = await fetch(`${gitHubApi}users?q=${login}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn("ErrorFromUsersData:", error);
  }
};

export const fetchReposData = async (usersData) => {
  try {
    return await Promise.all(usersData.map((u) => fetch(u.repos_url)))
      .then((response) => {
        return Promise.all(response.map((r) => r.json()));
      })
      .then((data) => {
        const updatedUsersData = usersData.map((user, index) => ({
          ...user,
          repos_url: Array.isArray(data[index]) && data[index],
        }));
        return updatedUsersData;
      })
      .catch((e) => {
        throw new Error();
      });
  } catch (error) {
    console.warn("ErrorFromReposData:", error);
  }
};
