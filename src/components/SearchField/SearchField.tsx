import { TextInputHooks } from "@/hooks/useTextInput";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface Props {
  inputHooks: TextInputHooks;
  handleSearch: (keyword: string) => void;
	placeholder:string;
  buttonLabel: string;
}

export const SearchField: FC<Props> = (props) => {
  const { inputHooks, handleSearch,placeholder, buttonLabel } = props;
  return (
    <>
      <Box className="bg-white rounded-full flex items-center">
        <SearchIcon fontSize="large" className="text-text" />
        <input
          type="text"
          placeholder={placeholder}
          value={inputHooks.value}
          onChange={inputHooks.handleChange}
          className="h-10 w-full text-xl text-text border-none focus:outline-none rounded-r-full"
        />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        className="mt-3"
        disabled={inputHooks.value.length === 0}
        onClick={() => {
          // Search
          handleSearch(inputHooks.value);
          inputHooks.clearValue();
        }}
      >
				{buttonLabel}
      </Button>
    </>
  );
};
