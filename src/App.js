import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Navbar from './component/AllComp/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About.jsx';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Footer from './component/Footer/Footer.jsx';
import ProductCategories from './component/Home/MegaMenu';
import ProductDetails from './component/ProductPage/ProductDetails.jsx';
import ProductListPass from './component/ProductList/ProductListPass.jsx';
import TermsAndConditions from './component/Footer/TermsAndConditions.jsx';
import FAQSection from './component/Footer/Faq.jsx';
import PrivacyPolicy from './component/Footer/PrivacyPolicy.jsx';
import ContactInformation from './component/Footer/Contact.jsx';
import { CartProvider } from "./component/AllComp/useCart.js";
import ImageSlider from './component/AllComp/ImageCarosel.jsx';
import images from './component/Datas/images.js';
import { MyContextProvider } from './component/Datas/DataContext.jsx';
import Checkout from './component/Checkout/checkout.jsx';
import PaymentPage from './component/Checkout/PlaceOrder.jsx';

// Layout Wrapper
const Layout = ({ isLoggedIn, setLoggedIn }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isAuthHome = location.pathname === '/';

  useEffect(() => {
    document.body.style.backgroundColor = isAuthPage ? '#0A4938' : '#fff';
  }, [isAuthPage]);

  return (
    <div>
      {!isAuthPage && <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />}
      {!isAuthPage && <ProductCategories />}
      <Container sx={{ marginTop: 2, minHeight: '100vh' }}>
        {isAuthHome && <ImageSlider images={images} />}
        <Outlet /> {/* This will render the matched route's component */}
      </Container>
      {!isAuthPage && <Footer />}
    </div>
  );
};

// Define Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout wrapper
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'productList/:slug', element: <ProductListPass /> },
      { path: 'productList', element: <ProductListPass /> },
      { path: 'products/:slug', element: <ProductDetails /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'placeorder', element: <PaymentPage /> },
      { path: 'terms', element: <TermsAndConditions /> },
      { path: 'faq', element: <FAQSection /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'contact', element: <ContactInformation /> },
    ],
  },
]);

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <CartProvider>
      <MyContextProvider>
        <RouterProvider router={router} />
      </MyContextProvider>
    </CartProvider>
  );
};

export default App;
