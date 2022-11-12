export interface IPost {
  title: string;
  body: string;
  number: number;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}