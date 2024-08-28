import Bio from './screen/Bio';
import BookScreen from './screen/BookScreen';
import ContactScreen from './screen/ContactScreen';
import Home from './screen/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/book' element={<BookScreen/>} />
    <Route path='/contact' element={<ContactScreen/>} />
    <Route path='/bio' element={<Bio/>} />

  </Routes>
  );
}

export default App
