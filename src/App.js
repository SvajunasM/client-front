import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import AuthContext from './store/authContext';

function App() {
  const status = sessionStorage.getItem('status');
  const [isLogged, setIsLogged] = useState(status);

  function login() {
    setIsLogged(true);
  }
  function logout() {
    setIsLogged(false);
    localStorage.removeItem('token');
    sessionStorage.removeItem('status');
  }

  const ctxValue = {
    isLogged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/add'
            element={
              <PrivateRoute>
                <Add />
              </PrivateRoute>
            }
          />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
