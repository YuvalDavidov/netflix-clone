import { Route, Routes } from "react-router-dom";
import NavBar from "./cmps/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar/>
<Routes>
<Route path="/" element={<Home/>}/>

</Routes>
    </>
  );
}

export default App;
