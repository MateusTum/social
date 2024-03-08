import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
// Assuming these are your page component imports
// import Home from './Home';
// import About from './About';
import LoginPage from './Pages/authentication/login_page/LoginPage';
// import RegisterPage from './Pages/authentication/register_page/RegisterPage'; // Example import if you have a Register page

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        {/* React Router v6 uses `element` prop to render components */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        {/* Uncomment and import RegisterPage to use it */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
