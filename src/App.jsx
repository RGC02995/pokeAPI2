import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Navigate } from "react-router-dom";
import NotFound from "./components/routes/NotFound";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Navbar />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={"404"} replace />} />
      </Routes>
      
    </div>
  );
}

export default App;
