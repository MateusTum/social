import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import pages
import HomePage from "./Pages/home_page/HomePage";

// Authentication pages
import LoginPage from "./Pages/authentication/login_page/LoginPage";
import RegisterPage from "./Pages/authentication/register_page/RegisterPage";

// Header
import AppHeader from "./Components/header/Header";

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        {/* Home */}
        {/* React Router v6 uses `element` prop to render components */}
        <Route path="/home" element={<HomePage />} />

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        {/* Uncomment and import RegisterPage to use it */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
