import { SearchInputContainer } from "./styles"
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  postsQuantity: number;
  getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ getPosts, postsQuantity }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleNewSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleNewSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsQuantity} publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SearchInputContainer>
  )
}