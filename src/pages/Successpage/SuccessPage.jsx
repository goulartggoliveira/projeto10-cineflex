import styled from "styled-components";
import { textColor } from "../../Constants/Colors";
import { Link } from "react-router-dom";

export default function SuccessPage({ sucesso }) {
  const { movie, date, hour, buyer, cpf, seats } = sucesso;
  console.log(sucesso);
  return (
    <PageContainer>
      <Title>Pedido Feito com sucesso!</Title>
      <TextContainer>
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{movie}</p>
        <p>
          {date} - {hour}
        </p>
      </TextContainer>
      <TextContainer>
        {seats.map((s) => (
          <p key={s}>Assento {s}</p>
        ))}
      </TextContainer>
      <TextContainer>
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {buyer}</p>
        <p>CPF: {cpf}</p>
      </TextContainer>
      <Link to="/">
        <button>Voltar para a home</button>
      </Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  color: ${textColor};
  margin: 30px 20px;
  padding-bottom: 120px;
  padding-top: 70px;
  p {
    margin-top: 5px;
  }
  a {
    text-decoration: none;
  }
  button {
    margin-top: 50px;
    width: 225px;
    height: 42px;
    border-radius: 3px;
  }
`;

const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #247a6b;
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
