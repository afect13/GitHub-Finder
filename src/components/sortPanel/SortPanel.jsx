import IconButton from "@mui/material/IconButton";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import SortIcon from "@mui/icons-material/Sort";
const SortPanel = ({ onChangeOrderSort, sortOrder }) => {
  return (
    <div className="flex justify-between w-[500px] px-[16px]">
      <h1 className="font-bold text-2xl text-zinc-700">User Information</h1>
      <IconButton onClick={onChangeOrderSort} color="primary" aria-label="sort by repo">
        {sortOrder && sortOrder === "ASC" ? <VerticalAlignTopIcon /> : sortOrder && <VerticalAlignBottomIcon />}
        <SortIcon />
      </IconButton>
    </div>
  );
};

export default SortPanel;
