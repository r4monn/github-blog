import { LoadingContainer } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </LoadingContainer>
  )
}