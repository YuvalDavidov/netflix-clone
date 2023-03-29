import { Route, Routes } from "react-router-dom";
import NavBar from "./cmps/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>

      </AuthContextProvider>
    </>
  );
}

export default App;
