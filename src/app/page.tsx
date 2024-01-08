"use client";
import { PostMiniIcon } from "@/components/PostMiniIcon/PostMiniItem";
import { Box, Button, Grid, Typography } from "@mui/material";
import Avatar from "boring-avatars";

interface User {
  title: string;
  name: string;
  date: string;
}
const Page = () => {
  const data: User[] = [
    { title: "test", name: "kotaro", date: "2024/01/01" },
    { title: "test", name: "kotaro", date: "2024/01/01" },
    { title: "test", name: "kotaro", date: "2024/01/01" },
    { title: "test", name: "kotaro", date: "2024/01/01" },
    { title: "test", name: "kotaro", date: "2024/01/01" },
    { title: "test", name: "kotaro", date: "2024/01/01" },
    { title: "test", name: "kotaro", date: "2024/01/01" },
  ];
  return (
    <Box className="px-2 my-2">
      <Box>
        <Typography variant="h4" className="text-text">
          最近の投稿
        </Typography>
      </Box>
      {/*投稿一覧*/}
      {/*記事リストアイテム*/}

      <Box className="mt-20">
        <Grid container spacing={2}>
          {data.map((u: User, i: number) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Box className="flex justify-center">
                  <PostMiniIcon name={u.name} title={u.title} date={u.date} />
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={2} className="bg-sky-200">
          {data.map((u: User, i: number) => {
            if (i % 2 === 0) {
              return (
                <Grid
                  key={i}
                  item
                  md={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                  className="bg-red-200"
                >
                  <Box className="flex justify-end">
                    <PostMiniIcon name={u.name} title={u.title} date={u.date} />
                  </Box>
                </Grid>
              );
            } else {
              return (
                <Grid
                  key={i}
                  item
                  md={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                  className="bg-red-200"
                >
                  <Box className="flex justify-start">
                    <PostMiniIcon name={u.name} title={u.title} date={u.date} />
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>

      {/*
      <Grid container>
        {data.map((u: User, i: number) => {
          return (
            <Grid key={i} item xs={6} className="bg-red-200">
              <PostMiniIcon name={u.name} title={u.title} date={u.date} />
            </Grid>
          );
        })}
      </Grid>
			*/}
    </Box>
  );
};

export default Page;
