import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/auth-context";
import SignUpPage from "./pages/Sign Up/SignUpPage";
import SignInPage from "./pages/Sign In/SignInPage";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};
export default App;
