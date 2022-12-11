import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SessionPage from "./pages/Sessionpage/SessionPage";
import Seatspage from "./pages/Seatspage/Seatspage";
import SuccessPage from "./pages/Successpage/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<SessionPage />} />
        <Route path="/assentos/:idSessao" element={<Seatspage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
