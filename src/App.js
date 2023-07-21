import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/auth-context";
import SignUpPage from "./pages/Sign Up/SignUpPage";
import SignInPage from "./pages/Sign In/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};
export default App;
