import styled from "styled-components";
import { baseColor } from "../../constants/colors";

export default function Footer() {
  <FooterContainer>
    <PosterContainer>
      <Poster src="https://img.elo7.com.br/product/original/3E882D1/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-3-poster.jpg" />
    </PosterContainer>
    <Title>
      <p>filmeee</p>
    </Title>
  </FooterContainer>;
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
  background-color: white;
  margin: 12px;
`;
const Poster = styled.img`
  width: 48px;
  height: 72px;
  padding: 8px;
`;
