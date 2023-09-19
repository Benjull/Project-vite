import './App.css'
import {Counter} from './Counter'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import NoPage from './NoPage';
import Home from './home';
import Text from './Text';

function App() {
  return (
    
    <>
      <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="text" element={<Text/>} />
          <Route path="Counter" element={<Counter />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
      </>
  )
}

export default App
