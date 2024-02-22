import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from "@mui/material";
const useCoreSearchExamContext = () => {
  const renderSearchIcon = () => {
    return (
      <IconButton type="button" aria-label="search" className="">
        <SearchIcon className="text-[1.7rem]"/>
      </IconButton>
    );
  };
  const renderSearchBox = () => {
    return (
      <div className="bg-blue-50 rounded-full w-[100%]">
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Tìm Kiếm" />
        <IconButton type="button" aria-label="search">
          <SearchIcon className="text-gray-500"/>
        </IconButton>
      </div>
    );
  };
  return {
    renderSearchIcon,
    renderSearchBox,
  };
};

export default useCoreSearchExamContext;
