import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReposData, fetchUsersData } from "../../utils/api";
import { paginate } from "../../utils/helpers";

const fetchUsers = async (login) => {
  const usersResult = await fetchUsersData(login);
  return await fetchReposData(usersResult.items);
};
export const fetchData = createAsyncThunk("data/fetchUsers", fetchUsers);

const initialState = {
  usersData: [],
  paginatedData: [],
  loading: false,
  page: 1,
  sortOrder: "",
  error: null,
};

export const usersDataSlice = createSlice({
  name: "users_data",
  initialState,
  reducers: {
    setPagintaionData: (state, action) => {
      state.paginatedData = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.usersData = action.payload;
        state.paginatedData = paginate(action.payload, 5);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUsersData, setPagintaionData, setPage, setSortOrder } = usersDataSlice.actions;

export default usersDataSlice.reducer;
