import styled from "styled-components";
import Seat from "../../components/Seat/Seat";
import { textColor } from "../../Constants/Colors";

export default function Seatspage() {
  return (
    <PageContainer>
      <Seat />
      <Seat />
      <Seat />
      <Seat />
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
