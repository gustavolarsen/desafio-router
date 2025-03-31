import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ListaProdutos from "./components/ListaProdutos/ListaProdutos";
import NotFound from "./components/NotFound/NotFound";
import Produto from "./components/Produto/Produto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<ListaProdutos />}
            />
            <Route
              path="produto/:id"
              element={<Produto />}
            />
            <Route
              path="contato"
              element={<Contato />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
