import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/gowrishankar">
        <Routes>
          <Route path=""  element={<HomePage />} />
          <Route path="projects"  element={<Projects />} />
          <Route path="experience"  element={<WorkExperience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
