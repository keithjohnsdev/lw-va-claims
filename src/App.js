import "./theme";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import VAWalkthrough from "./components/VA-Walkthrough/";
import MobileContainer from "./components/Shared/MobileContainer";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <MobileContainer>
      <div className="app">
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/va-walkthrough" element={<VAWalkthrough />} />
        </Routes>
      </div>
    </MobileContainer>
  );
}

export default App;
