import logo from "./logo.svg";
import "./App.css";
import { LoginForm } from "./components/Login/LoginForm";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/pages/Main";
import { Travel } from "./components/pages/Travel";
import Layout from "./layout/Layout";
import Template from "./components/pages/Template";
import { TStorage } from "./components/pages/TStorage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="/admin/main" element={<Main />} />
          <Route path="/admin/travel" element={<Template />} />
          <Route path="/admin/Storage" element={<TStorage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
