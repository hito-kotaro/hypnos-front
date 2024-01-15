import { Box, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import { FC } from "react";

interface Props {
  handleName: string;
  body: string;
}

export const CommentCard: FC<Props> = (props) => {
  const { handleName, body } = props;
  return (
    <Box className="bg-white p-2 rounded-lg">
      <Box className="flex items-center">
        <Avatar variant="beam" name={handleName} />
        <Box className="ml-3">
          <Typography variant="h6" className="text-text">
            {handleName}
          </Typography>
        </Box>
      </Box>
      <Box className="mt-3">
        <Typography variant="body1" className="text-text">
          {body}
        </Typography>
      </Box>
    </Box>
  );
};
