import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/projects" exact element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
