import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer, PostsListContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchInput />

      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </HomeContainer>
  )
}