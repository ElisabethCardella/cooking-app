import { List } from "@chakra-ui/react";
import { TextField } from "@mui/material";
import { React } from "react";

const SearchArea = () => {
  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List />
    </div>
  );
};

export default SearchArea;
