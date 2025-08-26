import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AlertState from "./context/alert/AlertState";
import ThemeState from "./context/theme/ThemeState";

function App() {
  return (
    <>
    <ThemeState>
      <AlertState>
        <NoteState>
          <BrowserRouter>
            <Navbar />
            <Alert />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </BrowserRouter>
        </NoteState>
      </AlertState>
    </ThemeState>
    </>
  );
}

export default App;
