import { Title, Search, SearchResults, PaginationPanel, SortPanel, Loader } from "../../components";
import { paginate, sortByOrder } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setPagintaionData, setPage, setSortOrder } from "../../features/UsersData/usersDataSlice";

const Main = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.userData.usersData);
  const paginatedData = useSelector((state) => state.userData.paginatedData);
  const loading = useSelector((state) => state.userData.loading);
  const page = useSelector((state) => state.userData.page);
  const sortOrder = useSelector((state) => state.userData.sortOrder);
  const handleSearchUsers = (login) => {
    if (login.length > 0) {
      dispatch(setPagintaionData([]));
      dispatch(setPage(1));
      dispatch(fetchData(login));
      dispatch(setSortOrder(""));
    } else {
      dispatch(setPagintaionData([]));
      dispatch(setPage(1));
      dispatch(setSortOrder(""));
    }
  };

  const handleChangeOrderSort = () => {
    if (!sortOrder) {
      dispatch(setSortOrder("ASC"));
      const sortedAsc = sortByOrder(usersData, "ASC");
      dispatch(setPagintaionData(paginate(sortedAsc, 5)));
    } else if (sortOrder === "ASC") {
      dispatch(setSortOrder("DESC"));
      const sortedDesc = sortByOrder(usersData, "DESC");
      dispatch(setPagintaionData(paginate(sortedDesc, 5)));
    } else if (sortOrder === "DESC") {
      dispatch(setSortOrder(""));
      dispatch(setPagintaionData(paginate(usersData, 5)));
    }
  };
  const handleChangePage = (event, value) => {
    dispatch(setPage(value));
  };

  return (
    <>
      <Title text={"Search on GitHub"} />
      <Search onSearch={handleSearchUsers} />
      {paginatedData && paginatedData.length > 0 && paginatedData[page - 1] && (
        <>
          <SortPanel sortOrder={sortOrder} onChangeOrderSort={handleChangeOrderSort} />
          <SearchResults users={paginatedData[page - 1]} />
          {paginatedData && paginatedData.length > 1 && (
            <PaginationPanel page={page} onChangePage={handleChangePage} count={paginatedData.length} />
          )}
        </>
      )}
      {loading && <Loader />}
    </>
  );
};

export default Main;
