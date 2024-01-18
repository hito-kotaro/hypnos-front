"use client";
import { ArticleListItem } from "@/components/ArticleListItem/ArticleListItem";
import { Header } from "@/components/Header/Header";
import { SearchField } from "@/components/SearchField/SearchField";
import { useTextInput } from "@/hooks/useTextInput";
import { articleSummaryMock } from "@/mock/articleMock";
import { MultiTemplate } from "@/templates/MultiTemplate";
import { ArticleBase } from "@/types/article";
import { Box, Grid } from "@mui/material";

export default function Home() {
  const searchInputHooks = useTextInput();
  const handleSearch = (keyword: string) => {
    console.log(keyword);
  };

  return (
    <>
      <Header isPostEnable />
      {/*左コンポーネント*/}
      <MultiTemplate>
        <Box className="px-2" />

        {/*中央コンポーネント*/}
        <Box className="px-2">
          {/*検索窓*/}
          <Box>
            <SearchField
              inputHooks={searchInputHooks}
              handleSearch={handleSearch}
              placeholder="キーワードを入力"
              buttonLabel="検索"
            />
          </Box>
          {/*記事表示*/}
          <Box>
            <Grid container spacing={2}>
              {/*2列で表示*/}
              {articleSummaryMock.map((a: ArticleBase, i: number) => {
                {
                  /*偶数要素(左の列)は右寄せ*/
                }
                if (i % 2 === 0) {
                  return (
                    <Grid key={i} item md={6}>
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
                    <Grid key={i} item md={6}>
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
        {/*右コンポーネント*/}
        <Box className="px-2" />
      </MultiTemplate>
    </>
  );
}
