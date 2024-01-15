import { Box, Typography } from "@mui/material";
import Avatar from "boring-avatars";

export const CommentCard = () => {
  return (
    <Box className="bg-white p-2 rounded-lg">
      <Box className="flex items-center">
        <Avatar variant="beam" name="HandleName" />
        <Box className="ml-3">
          <Typography variant="h6" className="text-text">
            HandleName
          </Typography>
        </Box>
      </Box>
      <Box className="mt-3">
        <Typography variant="body1" className="text-text">
          ここにコメントが入ります。 ここにコメントが入ります。
          ここにコメントが入ります。 ここにコメントが入ります。
          ここにコメントが入ります。 ここにコメントが入ります。
          ここにコメントが入ります。
        </Typography>
      </Box>
    </Box>
  );
};
