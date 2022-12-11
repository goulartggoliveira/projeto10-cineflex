import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard/MovieCard";
import { textColor } from "../../Constants/Colors";
import { Url } from "../../Constants/urls";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(`${Url}/movies`);
    promise.then((res) => setMovies(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (!movies) {
    return (
      <img
        src="https://static.vecteezy.com/ti/vetor-gratis/t2/1826199-progress-loading-bar-buffering-download-upload-and-loading-icon-vetor.jpg"
        alt=""
      />
    );
  }

  return (
    <PageContainer>
      Selecione o Filme
      <FilmList>
        {movies.map((f) => (
          <Link key={f.id} to={`/sessoes/${f.id}`}>
            <MovieCard posterURL={f.posterURL} />
          </Link>
        ))}
      </FilmList>
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
export const FilmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
