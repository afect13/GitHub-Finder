import { configureStore } from "@reduxjs/toolkit";
import usersDataSlice from "../features/UsersData/usersDataSlice";
import usersReposSlice from "../features/UserRepos/userReposSlice";
export const store = configureStore({
  reducer: {
    userData: usersDataSlice,
    userRepos: usersReposSlice,
  },
});
