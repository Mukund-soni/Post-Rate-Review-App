import "./App.css";
import MainPage from "./Components/HomePage/MainPage";
import NavBar from "./Components/NavBar/Navigation";
import DisplayContent from "./Components/DisplayContent/DisplayContent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartContextProvider from "./Components/CartContext";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/display" element={<DisplayContent />} />
            <Route path="/order/:id" element={<ProductDetails />} />
            <Route path="" element={<MainPage />} />
          </Routes>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
