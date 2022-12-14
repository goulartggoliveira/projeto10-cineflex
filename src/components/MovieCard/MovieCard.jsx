import styled from "styled-components";

export default function MovieCard({ posterURL }) {
  return (
    <MovieContainer>
      <MovieImage data-test="movie" src={posterURL} />
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  width: 150px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const MovieImage = styled.img`
  width: 129px;
  height: 193px;
`;
