import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import Login from './pages/login/Login';
import './App.scss'
import { publicRoutes } from "./routes";
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => {
            return (
              <Route path={route?.path} element={route.component} />
            )
          })}

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
