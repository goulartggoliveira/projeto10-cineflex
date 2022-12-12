import styled from "styled-components";
import { baseColor } from "../../Constants/Colors";

export default function Footer({ poster, title, weekday, hour }) {
  return (
    <FooterContainer data-test="footer">
      <PosterContainer>
        <Poster src={poster} />
      </PosterContainer>
      <Title>
        <p>{title}</p>
        {weekday && hour && (
          <p>
            {weekday} - {hour}
          </p>
        )}
      </Title>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${baseColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p:nth-child(2) {
    margin-top: 10px;
  }
`;

const PosterContainer = styled.div`
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  margin: 12px;
`;
const Poster = styled.img`
  width: 48px;
  height: 72px;
  padding: 8px;
`;
