import styled from "styled-components";
import { seatColors } from "../../Constants/Colors";

export default function Seat() {
  return <SeatNumber>10</SeatNumber>;
}

const SeatNumber = styled.div`
  border: 1px solid ${seatColors.available.border};
  background-color: ${seatColors.available.background};
  width: 26px;
  height: 26px;
  border-radius: 25px;

  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 5px 3px;
`;
