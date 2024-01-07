import { Box, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import { FC } from "react";

interface Props {
  title: string;
  name: string;
  date: string;
}

export const PostMiniIcon: FC<Props> = (props) => {
  const { title, name, date } = props;
  return (
    <button
      type="button"
      className="mx-3 cursor-pointer border-none bg-primary p-0 m-0"
    >
      <Box sx={{ width: "350px" }} className="flex">
        <Box
          sx={{ height: "100px", width: "100px" }}
          className="bg-white rounded-md"
        >
          image
        </Box>

        <Box className="ml-2">
          <Box sx={{ width: "240px" }}>
            <Typography
              sx={{
                width: "240px",
                fontSize: "14px",
              }}
              variant="body1"
              component="p"
              className="text-left"
            >
              {title}
              ここは入力されているtextを全て表示する。
              入力のところで文字数を制限する。
            </Typography>
          </Box>

          <Box
            className="flex justify-between"
            sx={{ fontSize: "12px", width: "240px" }}
          >
            <Box>
              <Avatar size={20} variant="beam" name={name} />
            </Box>
            <Box>
              <Box>{name}</Box>
            </Box>
          </Box>
          <Box
            className="flex justify-end"
            sx={{ fontSize: "12px", width: "240px" }}
          >
            {date}
          </Box>
        </Box>
      </Box>
    </button>
  );
};
