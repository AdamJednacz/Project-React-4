import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Layout from "./components/Layout";

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />} />
          <Route path='/:pageType' element={<Layout />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
