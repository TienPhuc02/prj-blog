import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/auth-context";
import SignUpPage from "./pages/Sign Up/SignUpPage";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};
export default App;
