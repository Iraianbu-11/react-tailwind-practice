import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Colors from "./components/Colors";
import Container from "./components/Container";
import Typography from "./components/Typography";
import Navbar from "./components/Navbar";
import Sizing from "./components/Sizing";
import Position from "./components/Position";
import Background from "./components/Background";
import Filters from "./components/Filters";
import Borders from "./components/Borders";
import Breakpoints from "./components/Breakpoints";
import Flexbox from "./components/Flexbox";
import Animation from "./components/Animation";
import Grid from "./components/Grid";
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
          <Route path="/background" element={< Background />} />
          <Route path="/borders" element={< Borders />} />
          <Route path="/filters" element={< Filters />} />
          <Route path="/breakpoints" element={< Breakpoints />} />
          <Route path="/flexbox" element={< Flexbox />} />
          <Route path="/grid" element={< Grid />} />
          <Route path="/animations" element={< Animation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
