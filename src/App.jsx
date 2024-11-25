import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Colors from "./components/Colors";
import Container from "./components/Container";
import Typography from "./components/Typography";
import Navbar from "./components/Navbar";
import Sizing from "./components/Sizing";
import Position from "./components/Position";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Colors />} />
          <Route path="/container" element={<Container />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/sizing" element={< Sizing />} />
          <Route path="/position" element={< Position />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
