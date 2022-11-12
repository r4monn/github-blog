import styled from "styled-components";

export const ExternalLinkContainer = styled.a`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.textSizes["components-link"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors["brand-blue"]};
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors["brand-blue"]};;
  }
`;