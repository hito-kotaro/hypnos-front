import { CommentCard } from "@/components/CommentCard/CommentCard";
import { Comment } from "@/types/article";
import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  comments: Comment[];
}

export const LeftComponent: FC<Props> = (props) => {
  const { comments } = props;

  return (
    <Box>
      {comments.map((c: Comment) => {
        return (
          <Box key={c.id} className="mt-3">
            <CommentCard handleName={c.handleName} body={c.body} />
          </Box>
        );
      })}
    </Box>
  );
};
