import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Seat from "../../components/Seat/Seat";
import { textColor } from "../../Constants/Colors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Url } from "../../Constants/urls";

export default function Seatspage() {
  const { idSessao } = useParams();
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(`${Url}/showtimes/${idSessao}/seats`);
    promise.then((res) => setSession(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  return (
    <PageContainer>
      Selecione os assentos
      <SeatsContainer>
        {session?.seats?.map((s) => (
          <Seat key={s.id} seat={s} />
        ))}
      </SeatsContainer>
      <Footer
        poster={session.movie.posterURL}
        title={session.movie.title}
        weekday={session.day.weekday}
        hour={session.name}
      />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: ${textColor};
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;

const SeatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
