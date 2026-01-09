import './App.css';
import {BrowserRouter, createBrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Navigation from './pages/Navigation';

function App() {
  const router = createBrowserRouter([
    {
      path:"/login",
      element: <LoginPage />
    },
    {
      path:"/register",
      element: <RegistrationPage />
    }    
  ])
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
