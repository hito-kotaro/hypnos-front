import { ArticleDetail } from "@/types/article";
import { Box, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import { FC } from "react";

interface Props {
  article: ArticleDetail;
}

export const CenterComponent: FC<Props> = (props) => {
  const { article } = props;

  return (
    <Box>
      {/*タイトル*/}
      <Box className="text-center">
        <Typography variant="h4" className="font-semibold text-text">
          {article.title}
        </Typography>
        <Typography variant="h5" className="text-text">
          {`${article.createdAt}に投稿`}
        </Typography>
      </Box>

      {/*トップ画像*/}
      <Box>
        <Box sx={{ height: "250px" }} className="bg-white"></Box>
      </Box>

      {/*本文*/}
      <Box className="mt-6">
        {/*ハンドルネーム*/}
        <Box className="flex items-center">
          <Box>
            <Avatar variant="beam" name={article.handleName}/>
          </Box>
          <Box className="ml-3">
            <Typography variant="h5" className="font-semibold text-text">
							{article.handleName}
            </Typography>
          </Box>
        </Box>

        {/*本文*/}
        <Box className="mt-3">
          <Typography variant="body1" className="text-text">
						{article.body}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
