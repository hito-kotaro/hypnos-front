import { Box, Link, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import { FC } from "react";

interface Props {
  id: number;
  title: string;
  name: string;
  date: string;
}

export const ArticleListItem: FC<Props> = (props) => {
  const { id, title, name, date } = props;
  return (
    <Box sx={{ width: "350px" }} className="flex">
      {/*Article Image*/}
      <Link href={`/post/${id}`} underline="none">
        <Box
          sx={{ height: "100px", width: "100px" }}
          className="bg-white rounded-md text-5xl flex items-center justify-center"
        >
					😴
        </Box>
      </Link>

      {/*Article Title*/}
      <Box className="ml-2">
        <Box sx={{ width: "240px" }}>
          <Link href={`/post/${id}`}  variant="body1" color="inherit" underline="none">
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
            </Typography>
          </Link>
        </Box>

        {/*Post User Info*/}
        <Box
          className="flex justify-between"
          sx={{ fontSize: "12px", width: "240px" }}
        >
          <Box>
            <Link href="#" underline="none">
              <Avatar size={30} variant="beam" name={name} />
            </Link>
          </Box>

          <Box>
            <Link href="#" variant="body2" color="gray" underline="none">
              <Box>{name}</Box>
            </Link>
          </Box>
        </Box>
        <Box
          className="flex justify-end"
          sx={{ fontSize: "12px", width: "240px" }}
          color="gray"
        >
          {date}
        </Box>
      </Box>
    </Box>
  );
};
