import { IPost } from "../../../../interfaces/interfaces";
import { dateFormatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost;
}
export function Post({ post }: PostProps) {
  const formattedDate = dateFormatter(post.created_at);

  return (
    <PostContainer to={`/posts/${post.number}`} >
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>
        {post.body}
      </p>
    </PostContainer>
  )
}