import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Topics from "./pages/Topics";
import QuizPage from "./pages/QuizPage";
import { QuizProvider } from "./pages/QuizContext";
import ProtectedRoute from "./ProtectedRoute";
import AuthRedirectRoute from "./AuthRedirectRoute"; // Import AuthRedirectRoute
import Footer from "./components/Footer";

const App = () => {
  return (
    <QuizProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Protected Routes */}
          <Route
            path="/topics"
            element={<ProtectedRoute element={<Topics />} />}
          />
          <Route
            path="/quizpage"
            element={<ProtectedRoute element={<QuizPage />} />}
          />

          {/* Auth Redirect Routes */}
          <Route
            path="/login"
            element={<AuthRedirectRoute element={<Login />} />}
          />
          <Route
            path="/register"
            element={<AuthRedirectRoute element={<Register />} />}
          />

          {/* Default Route */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </QuizProvider>
  );
};

export default App;
