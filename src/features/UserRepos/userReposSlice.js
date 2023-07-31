import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paginatedRepos: [],
  page: 1,
};

export const userReposSlice = createSlice({
  name: "users_repos",
  initialState,
  reducers: {
    setPagintaionRepos: (state, action) => {
      state.paginatedRepos = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPagintaionRepos, setPage } = userReposSlice.actions;

export default userReposSlice.reducer;
