import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MessagesPage } from './pages/MessagesPage';
import { PageNotFoundPage } from './pages/PageNotFoundPage';
import { Navbar } from './components/Navbar';

export const UserContext = createContext("none")
function App() {
  return (
    <div className="App">
      <UserContext.Provider value = "user1">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='messages' element={<MessagesPage></MessagesPage>} />
        <Route path='*' element={<PageNotFoundPage></PageNotFoundPage>}/>
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    </div>
  );
}

export default App;
