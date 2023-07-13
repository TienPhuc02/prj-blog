import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/auth-context";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};
export default App;
