import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faComment, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/Header/ExternalLink";
import { Loading } from "../../../../components/Loading";
import { IPost } from "../../../../interfaces/interfaces";
import { dateFormatter } from "../../../../utils/formatter";
import { PostHeaderContainer } from "./styles";

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function previousPage() {
    navigate(-1)
  }

  const formattedDate = dateFormatter(postData.created_at);

  return (
    <PostHeaderContainer>
      {isLoading ? <Loading /> : (
        <>
          <header>
            <ExternalLink
              as="button"
              text="VOLTAR"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              variant="iconLeft"
              onClick={previousPage}
            />
            <ExternalLink text="VER NO GITHUB" href={postData.html_url} target="_blank" />
          </header>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>

  )
}