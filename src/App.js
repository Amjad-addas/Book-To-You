import BookScreen from './screen/BookScreen';
import Home from './screen/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/book' element={<BookScreen/>} />

  </Routes>
  );
}

export default App
