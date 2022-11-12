import styled from "styled-components";

export const PostHeaderContainer = styled.section`
  width: 100%;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      color: ${({ theme }) => theme.colors["base-title"]};
      line-height: 130%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      line-height: 0px;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }
  }
`;