import "./App.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  return (
    <div>
      <div className="blur" style={{ top: "-18%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "62%", left: "-8rem" }}></div>
      <Routes>
      <Route
              path='/'
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path='/signup'
              element={!user ? <SignUp /> : <Navigate to="/" />}
            />
      </Routes>
    </div>
  );
}

export default App;
