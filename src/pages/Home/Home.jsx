import styled from "styled-components";
import MovieCard from "../../components/MovieCard/MovieCard";
import { textColor } from "../../Constants/Colors";

export default function Home() {
  return (
    <PageContainer>
      Selecione o Filme
      <filmList>
        <MovieCard
          posterURL={
            "https://img.elo7.com.br/product/original/3E882D1/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-3-poster.jpg"
          }
        />
        <MovieCard
          posterURL={
            "https://img.elo7.com.br/product/original/3E882D1/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-3-poster.jpg"
          }
        />
        <MovieCard
          posterURL={
            "https://img.elo7.com.br/product/original/3E882D1/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-3-poster.jpg"
          }
        />
      </filmList>
    </PageContainer>
  );
}

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: ${textColor};
  margin-top: 30px;
  padding-top: 70px;
`;
export const filmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
