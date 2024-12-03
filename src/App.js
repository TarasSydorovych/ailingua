import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  Router,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import "./exo/stylesheet.css";
import Login from "./page/login/login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
