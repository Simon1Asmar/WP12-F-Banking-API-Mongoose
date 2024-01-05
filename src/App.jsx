import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import UserDetails from "./components/UserDetails";
import Header from "./components/Header";
import { BankingProvider } from "./contexts/BankingContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <BankingProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/userDetails" element={<UserDetails />} />
          </Routes>
        </BankingProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
