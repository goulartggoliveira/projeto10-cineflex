import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Seat from "../../components/Seat/Seat";
import { textColor, seatColors } from "../../Constants/Colors";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Url } from "../../Constants/urls";

export default function Seatspage({ setSucesso }) {
  const { idSessao } = useParams();
  const [session, setSession] = useState(undefined);
  const [assentosSelecionados, setAssentosSelecionados] = useState([]);
  const [input, setInput] = useState({ name: "", cpf: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${Url}/showtimes/${idSessao}/seats`);
    promise.then((res) => setSession(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  function escolherAssentos(seat) {
    if (seat.isAvailable === false) {
      alert("Esse assento não está disponível");
    } else {
      const estaSelecionado = assentosSelecionados.some(
        (s) => seat.id === s.id
      );
      if (estaSelecionado) {
        const novaLista = assentosSelecionados.filter((s) => s.id !== seat.id);
        setAssentosSelecionados(novaLista);
      } else {
        setAssentosSelecionados([...assentosSelecionados, seat]);
      }
    }
  }

  function formInfo(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function reservarAssentos(e) {
    e.preventDefault();

    const body = {
      ids: assentosSelecionados.map((a) => a.id),
      name: input.name,
      cpf: input.cpf,
    };

    const infos = {
      movie: session.movie.title,
      date: session.day.date,
      hour: session.name,
      buyer: input.name,
      cpf: input.cpf,
      seats: assentosSelecionados.map((a) => a.name),
    };

    axios
      .post(`${Url}/seats/book-many`, body)
      .then((res) => {
        setSucesso(infos);
        navigate("/sucesso");
      })
      .catch((err) => alert(err.response.data));
  }

  if (!session) {
    return <div>Carregando...</div>;
  }

  return (
    <PageContainer>
      Selecione os assentos
      <SeatsContainer>
        {session?.seats?.map((seat) => (
          <Seat
            data-test="seat"
            key={seat.id}
            seat={seat}
            escolherAssentos={escolherAssentos}
            estaSelecionado={assentosSelecionados.some((s) => seat.id === s.id)}
          />
        ))}
      </SeatsContainer>
      <Footer
        title={session.movie.title}
        poster={session.movie.posterURL}
        weekday={session.day.weekday}
        hour={session.name}
      />
      <Containerexemplo>
        <Exemplo>
          <Marcacao status="selected" />
          <p>Selecionado</p>
        </Exemplo>
        <Exemplo>
          <Marcacao status="available" />
          <p>Disponível</p>
        </Exemplo>
        <Exemplo>
          <Marcacao status="unavailable" />

          <p>Indisponível</p>
        </Exemplo>
      </Containerexemplo>
      <Formulario onSubmit={reservarAssentos}>
        Nome do comprador:
        <input
          data-test="client-name"
          name="name"
          value={input.name}
          onChange={formInfo}
          placeholder="Digite seu nome..."
        />
        CPF do comprador:
        <input
          data-test="client-cpf"
          name="cpf"
          value={input.cpf}
          onChange={formInfo}
          type="number"
          placeholder="Digite seu CPF..."
        />
        <button data-test="book-seat-btn">Reservar assento(s)</button>
      </Formulario>
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

const Containerexemplo = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  margin: 10px;
`;
const Marcacao = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid ${(props) => seatColors[props.status].border};
  background-color: ${(props) => seatColors[props.status].background};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const Exemplo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
`;
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
    width: 225px;
    height: 42px;
    margin-top: 57px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #ffffff;
  }
  input {
    width: 309px;
    height: 50px;
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
`;
