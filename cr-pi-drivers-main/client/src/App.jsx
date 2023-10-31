import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Landing, Home, Form, Detail } from "./views/Index";

function App() {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
