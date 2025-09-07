import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import View from "./components/View";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/grid' element={<Grid />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
