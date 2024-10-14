import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import HelloGuest from './Components/HelloGuest';
import Corporate from './Components/Corporate';
import ReturnsOrders from './Components/ReturnsOrders';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Sign from './Components/Sign';
import CreateAccountForm from './Components/CreateAccountForm';
import UserProfile from './Components/UserProfile';
import AccountMenu from './Components/AccountMenu';
import ChangePassword from './Components/ChangePassword';
import DeletAccount from './Components/DeletAccount';
import Wishlist from './Components/Wishlist';
import Shop from './Components/Shop';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/HelloGuest" element={<HelloGuest />} />
          <Route path="/Corporate" element={<Corporate />} />

          <Route path="/ReturnsOrders" element={<ReturnsOrders />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/create-account" element={<CreateAccountForm />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/DeletAccount" element={<DeletAccount />} />
          <Route path="/Wishlist" element={<Wishlist/>}/>
          
          <Route path="/shop" element={<Shop />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
