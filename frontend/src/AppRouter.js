import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoverPage from "./pages/CoverPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
