import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<Add />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

