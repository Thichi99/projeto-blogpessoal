import './App.css';
import Home from "../src/pages/home/Home"
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/login/Login';
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <div className="min-h-[78.99vh]">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </div>
          <Footer />
    </BrowserRouter>
    </>
  );
}
export default App;