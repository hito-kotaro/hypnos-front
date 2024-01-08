"use client";
import { ArticleListItem } from "@/components/ArticleListItem/ArticleListItem";
import { Box, Grid, Typography } from "@mui/material";

interface ArticleBase {
  id: number;
  title: string;
  name: string;
  date: string;
}
const Page = () => {
  const data: ArticleBase[] = [
    { id: 1, title: "test", name: "kotaro", date: "2024/01/01" },
    { id: 2, title: "test", name: "kotaro", date: "2024/01/01" },
    { id: 3, title: "test", name: "kotaro", date: "2024/01/01" },
    { id: 4, title: "test", name: "kotaro", date: "2024/01/01" },
  ];
  return (
    <Box className="px-2 my-2">
      {/*ページタイトル*/}
      <Box>
        <Typography variant="h4" className="text-text">
          最近の投稿
        </Typography>
      </Box>

      {/*画面サイズxs~md時の投稿一覧*/}
      <Box className="mt-20">
        <Grid container spacing={2}>
          {data.map((u: ArticleBase, i: number) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Box className="flex justify-center">
                  <ArticleListItem
                    id={u.id}
                    title={u.title}
                    name={u.name}
                    date={u.date}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/*画面サイズmd~時の投稿一覧*/}
        <Grid container spacing={2}>
          {/*2列で表示*/}
          {data.map((u: ArticleBase, i: number) => {
            {
              /*偶数要素(左の列)は右寄せ*/
            }
            if (i % 2 === 0) {
              return (
                <Grid
                  key={i}
                  item
                  md={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Box className="flex justify-end">
                    <ArticleListItem
                      id={u.id}
                      name={u.name}
                      title={u.title}
                      date={u.date}
                    />
                  </Box>
                </Grid>
              );
            } else {
              {
                /*奇数要素(右の列)は左寄せ*/
              }
              return (
                <Grid
                  key={i}
                  item
                  md={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Box className="flex justify-start">
                    <ArticleListItem
                      id={u.id}
                      name={u.name}
                      title={u.title}
                      date={u.date}
                    />
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
