import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Url } from "../../Constants/urls";
import { textColor } from "../../Constants/Colors";
import SessionCard from "../../components/SessionCard/SessionCard";

export default function SessionPage() {
  const { idFilme } = useParams();

  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${Url}/movies/${idFilme}/showtimes`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  if (!movie) {
    return <div>caregando...</div>;
  }

  console.log(movie);

  return (
    <PageContainer>
      Selecione os horarios
      <ListContainer>
        {movie.days.map((f) => (
          <SessionCard movie={f} />
        ))}
      </ListContainer>
      <Footer poster={movie.posterURL} title={movie.title} />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: ${textColor};
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const ListContainer = styled.div`
  margin-top: 30px;
`;
