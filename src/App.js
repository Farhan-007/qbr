import { Route, Routes, HashRouter} from "react-router-dom";
import CommonContainer from "./CommonContainer"
import LandingPage from "./pages/LandingPage"
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/"
            element={
              <CommonContainer>
                <LandingPage />
              </CommonContainer>
            } />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;