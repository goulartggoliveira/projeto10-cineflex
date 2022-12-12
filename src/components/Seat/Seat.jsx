import styled from "styled-components";
import { seatColors, textColor } from "../../Constants/Colors";
import { useEffect, useState } from "react";

//available
// selected
// unavailable

export default function Seat({ seat, escolherAssentos, estaSelecionado }) {
  const [corBotao, setCorBotao] = useState("available");

  useEffect(() => {
    if (estaSelecionado) {
      setCorBotao("selected");
    } else if (seat.isAvailable) {
      setCorBotao("available");
    } else {
      setCorBotao("unavailable");
    }
  }, [estaSelecionado]);

  return (
    <SeatNumber corBotao={corBotao} onClick={() => escolherAssentos(seat)}>
      {seat.name}
    </SeatNumber>
  );
}

const SeatNumber = styled.div`
  border: 1px solid ${(props) => seatColors[props.corBotao].border};
  background-color: ${(props) => seatColors[props.corBotao].background};
  width: 26px;
  height: 26px;
  border-radius: 25px;

  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px 3px;
`;
