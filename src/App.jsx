import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SessionPage from "./pages/Sessionpage/SessionPage";
import Seatspage from "./pages/Seatspage/Seatspage";
import SuccessPage from "./pages/Successpage/SuccessPage";
import { useState } from "react";

function App() {
  const [sucesso, setSucesso] = useState({});
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<SessionPage />} />
        <Route
          path="/assentos/:idSessao"
          element={<Seatspage setSucesso={setSucesso} />}
        />
        <Route path="/sucesso" element={<SuccessPage sucesso={sucesso} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
