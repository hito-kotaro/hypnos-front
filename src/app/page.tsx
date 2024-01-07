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
    <Box>
      <Box>最近の投稿</Box>
      {/*投稿一覧*/}
      {/*記事リストアイテム*/}
      <Box className="bg-red-300 flex-wrap justify-center">
        {data.map((u: User, i: number) => {
          if (i === 0) {
            return (
              <PostMiniIcon
                key={i}
                title={u.title}
                name={u.name}
                date={u.date}
              />
            );
          } else {
            return (
              <PostMiniIcon
                key={i}
                title={u.title}
                name={u.name}
                date={u.date}
              />
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default Page;
