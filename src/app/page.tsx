"use client";
import { ArticleListItem } from "@/components/ArticleListItem/ArticleListItem";
import { Header } from "@/components/Header/Header";
import { articleSummaryMock } from "@/mock/articleMock";
import { ArticleBase } from "@/types/article";
import { Box, Grid, Typography } from "@mui/material";

const Page = () => {
  return (
    <>
      <Header isPostEnable />
      <Box className="px-2">
        {/*ページタイトル*/}
        <Box>
          <Typography variant="h4" className="text-text">
            最近の投稿
          </Typography>
        </Box>

        {/*画面サイズxs~md時の投稿一覧*/}
        <Box className="mt-20">
          <Grid container spacing={2}>
            {articleSummaryMock.map((a: ArticleBase, i: number) => {
              return (
                <Grid
                  key={i}
                  item
                  xs={12}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <Box className="flex justify-center">
                    <ArticleListItem
                      id={a.id}
                      title={a.title}
                      name={a.handleName}
                      date={a.createdAt}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {/*画面サイズmd~時の投稿一覧*/}
          <Grid container spacing={2}>
            {/*2列で表示*/}
            {articleSummaryMock.map((a: ArticleBase, i: number) => {
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
                        id={a.id}
                        name={a.handleName}
                        title={a.title}
                        date={a.createdAt}
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
                        id={a.id}
                        name={a.handleName}
                        title={a.title}
                        date={a.createdAt}
                      />
                    </Box>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
