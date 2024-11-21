import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import SigninSignup from "./components/SigninSignup/SigninSignup";

function App() {
  return (
    <div>
      <SigninSignup />;
    </div>
  );
}

export default App;
