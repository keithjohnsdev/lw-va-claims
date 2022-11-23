import "./theme";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Walkthrough1 from "./components/Walkthroughs/Walkthrough1";
import MobileContainer from "./components/Shared/MobileContainer";
function App() {
  return (
    <MobileContainer>
      <div className="app">
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/walkthrough-1" element={<Walkthrough1 />} />
        </Routes>
      </div>
    </MobileContainer>
  );
}

export default App;
