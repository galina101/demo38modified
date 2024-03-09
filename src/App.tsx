import React, { createContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { SellersPage } from './pages/SellersPage';
import { PageNotFoundPage } from './pages/PageNotFoundPage';
import { Navbar } from './components/Navbar';
import {LandingPage} from "./pages/LandingPage";
import {ThemeProvider} from "./ThemeContext";

export const UserContext = createContext("none")
function App() {
  return (
      <ThemeProvider>
    <div className="App">
      <UserContext.Provider value = "user1">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='*' element={<LandingPage></LandingPage>} />
        <Route path='products' element={<ProductsPage></ProductsPage>} />
          <Route path='sellers' element={<SellersPage></SellersPage>} />
        {/*<Route path='*' element={<PageNotFoundPage></PageNotFoundPage>}/>*/}
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    </div>
      </ThemeProvider>
  );
}

export default App;
