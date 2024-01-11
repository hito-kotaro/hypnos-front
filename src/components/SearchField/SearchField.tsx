import { TextInputHooks } from "@/hooks/useTextInput";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  inputHooks: TextInputHooks;
}

export const SearchField: FC<Props> = (props) => {
  const { inputHooks } = props;
  return (
    <Box className="bg-white rounded-full flex items-center">
      <SearchIcon fontSize="large" className="text-text" />
      <input
        type="input"
        placeholder="アイテム名を入力"
        value={inputHooks.value}
        onChange={inputHooks.handleChange}
        className="h-10 w-full text-xl text-text border-none focus:outline-none rounded-r-full"
      />
    </Box>
  );
};
