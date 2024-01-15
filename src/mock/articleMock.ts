import { ArticleBase, ArticleDetail } from "@/types/article";

export const articleSummaryMock: ArticleBase[] = [
  { id: 1, title: "test", handleName: "kotaro", createdAt: "2024/01/01" },
  { id: 2, title: "test", handleName: "kotaro", createdAt: "2024/01/01" },
  { id: 3, title: "test", handleName: "kotaro", createdAt: "2024/01/01" },
  { id: 4, title: "test", handleName: "kotaro", createdAt: "2024/01/01" },
  { id: 5, title: "test", handleName: "kotaro", createdAt: "2024/01/01" },
  { id: 6, title: "test", handleName: "kotaro", createdAt: "2024/01/01" },
];

export const articlesMock: ArticleDetail = {
  id: 1,
  title: "test",
  handleName: "kotaro",
  comments: [
    {
      id: 1,
      handleName: "sato",
      body: "ここにコメントが入ります。いいコメントだといいな",
    },
    {
      id: 2,
      handleName: "kotaro",
      body: "ここにコメントが入ります。いいコメントだといいな",
    },
    {
      id: 2,
      handleName: "sakamoto",
      body: "ここにコメントが入ります。いいコメントだといいな",
    },
    {
      id: 3,
      handleName: "sato",
      body: "ここにコメントが入ります。いいコメントだといいな",
    },
  ],
  createdAt: "2024/01/01",
};
