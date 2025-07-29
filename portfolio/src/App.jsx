import "./App.css";
import Home from "./components/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Home></Home>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
