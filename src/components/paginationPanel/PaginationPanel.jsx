import Pagination from "@mui/material/Pagination";

const PaginationPanel = ({ count, onChangePage, page }) => {
  return <Pagination count={count} page={page} onChange={onChangePage} variant="outlined" shape="rounded" />;
};

export default PaginationPanel;
