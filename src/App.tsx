import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateUpdate from "./components/CreateUpdate";
import Grid from "./components/Grid";
import View from "./components/View";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<CreateUpdate />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/update' element={<CreateUpdate />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
