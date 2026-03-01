import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GamePage from "./pages/Gamepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;