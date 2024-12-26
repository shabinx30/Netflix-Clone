import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Player from "./pages/Player";
import Navbar from "./components/Navbar";
import { AuthContextProvieder } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginProtecter from "./components/LoginProtecter";

function App() {
  return (
    <>
      <AuthContextProvieder>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginProtecter><Login /></LoginProtecter>} />
          <Route path="/signup" element={<LoginProtecter><Signup /></LoginProtecter>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/player/:params" element={<Player></Player>}/>
        </Routes>
      </AuthContextProvieder>
    </>
  );
}

export default App;
