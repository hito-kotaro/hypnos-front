import { Box, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  isPostEnable?: boolean;
}

export const Header: FC<Props> = (props) => {
  const { isPostEnable } = props;

  const router = useRouter();
  return (
    <Box
      className="z-10 sticky top-0 bg-white flex items-center px-2 drop-shadow rounded-b-lg "
      sx={{ height: "50px" }}
    >
      <Box className="flex-grow">
        <Box
          sx={{ height: "45px", width: "45px" }}
          className="flex items-center justify-center font-bold text-lg rounded-lg text-white bg-secondary"
        >
          G
        </Box>
      </Box>
      <Box>
        <IconButton
          onClick={() => {
            router.push("/search");
          }}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
        {isPostEnable ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              router.push("/post");
            }}
          >
            投稿する
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
