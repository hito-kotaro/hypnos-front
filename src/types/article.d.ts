export interface ArticleBase {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

export interface Comment {
  id: number;
  handleName: string;
  body: string;
}

export interface ArticleDetail extends ArticleBase {
  comments: Comment[];
}
