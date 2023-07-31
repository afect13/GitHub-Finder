import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const Search = ({ onSearch }) => {
  const [login, setLogin] = useState("");
  const handleInputChange = (event) => {
    setLogin(event.target.value.trim());
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(login);
    }
  };
  return (
    <div>
      <InputBase
        value={login}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="pl-2 mr-2 rounded-lg bg-stone-50 border border-stone-200"
        placeholder="Search by Login"
      />
      <IconButton
        onClick={() => {
          onSearch(login);
        }}
        color="primary"
        type="button"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
