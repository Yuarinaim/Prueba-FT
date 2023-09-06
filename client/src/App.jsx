import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientList from "./Pages/ClientList";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
// import { useEffect } from "react";

function App() {
  // const { pathname } = useLocation();

  // useEffect(
  //   fetch("https://apis.datos.gob.ar/georef/api/provincias")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res)),
  //   []
  // );

  return (
    <>
      {/* className={`${pathname !== "/" && "Home"}`} */}
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:id" element={<ClientList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
