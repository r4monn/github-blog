import { useCallback, useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { IPost } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer, PostsListContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );

        setPosts(response.data.items)
      } finally {
        setIsLoading(false);
      }
    }, [posts])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <SearchInput getPosts={getPosts} postsQuantity={posts.length} />

      {isLoading ? <Loading /> : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}

    </HomeContainer>
  )
}