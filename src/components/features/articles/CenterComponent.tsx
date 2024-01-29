import { ItemCard } from "@/components/ItemCard/ItemCard";
import { ArticleDetail } from "@/types/article";
import { RakutenItemBase } from "@/types/rakutenItem";
import { Box, Link, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import { FC } from "react";
import parse from "html-react-parser";

interface Props {
  article: ArticleDetail;
  items: RakutenItemBase[];
}

export const CenterComponent: FC<Props> = (props) => {
  const { article, items } = props;

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
        <Box className="flex justify-center ">
          <Avatar size={200} variant="beam" name={article.handleName} />
        </Box>
      </Box>

      {/*本文*/}
      <Box className="mt-6">
        {/*ハンドルネーム*/}
        <Box className="flex items-center">
          <Box>
            <Avatar variant="beam" name={article.handleName} />
          </Box>
          <Box className="ml-3">
            <Typography variant="h5" className="font-semibold text-text">
              {article.handleName}
            </Typography>
          </Box>
        </Box>

        {/*本文*/}
        <Box className="mt-3 text-text">{parse(article.body ?? "")}</Box>

        {/*アイテム*/}
        <Box
          sx={{ display: { xs: "block", lg: "none" } }}
          className="mt-6 text-center"
        >
          <Typography variant="h6" className="font-semibold text-text">
            おすすめアイテム
          </Typography>

          <Box className="flex flex-col items-center">
            {items.map((r: RakutenItemBase, index: number) => {
              const item = r.Item;
              return (
                <Box key={index} className="mt-3">
                  <Link
                    href={r.Item.affiliateUrl}
                    color="secondary"
                    underline="none"
                  >
                    <ItemCard
                      imageUrl={item.mediumImageUrls[0].imageUrl}
                      name={item.itemName}
                      price={item.itemPrice}
                    />
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
