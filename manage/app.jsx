import React from 'react'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Manage/Login';

const app = () => {
  return (
   <AuthProvider>
    <BrowserRouter>
     <Routes>
        <Route path="/manage/login" element="{<Login></Login>}">Login</Route>
     </Routes>
    </BrowserRouter>
   </AuthProvider>
  );
}

export default app;
