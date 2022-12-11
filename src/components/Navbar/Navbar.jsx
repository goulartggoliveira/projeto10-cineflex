import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor, baseColor } from "../../Constants/Colors";

export default function Navbar() {
  return (
    <NavContainer>
      <Link to="/">CINEFLEX</Link>
    </NavContainer>
  );
}
const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${baseColor};
  color: ${accentColor};
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: ${accentColor};
  }
`;
