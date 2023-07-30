import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/auth-context";
import SignUpPage from "./pages/Sign Up/SignUpPage";
import SignInPage from "./pages/Sign In/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Detail from "./pages/Deatails/Detail";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/set-up-cuc-chill" element={<Detail />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};
export default App;
