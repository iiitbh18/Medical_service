import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../../pages/Cart/Cart";
import { Landing } from "../../pages/landing";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/Login/LoginPage";
import { OrderReview } from "../../pages/PaymentPage/orderReview";
import { PymentDetails } from "../../pages/PaymentPage/paymentDetails";
import ProductDetail from "../../pages/ProductDetailPage/ProductDetail";
import Products from "../../pages/ProductPage/Products";
import { useSelector } from "react-redux";
import { PrivateRoute } from "../../context/PrivateRoute";
import ErrorPage from "../../pages/ErrorPage";
import HealthConcern from "../../pages/LandingPage/HealthConcern";


import HeartHealth from "../../pages/LandingPage/HeartHealth";
import Fitness from "../../pages/LandingPage/Fitness";
import WomensHealth from "../../pages/LandingPage/WomensHealth";
import CancerTreatment from "../../pages/LandingPage/CancerTreatment";
import MentalHealth from "../../pages/LandingPage/MentalHealth";
import ShopBycategory from "../../pages/LandingPage/ShopByCategory";

import Veterinary from "../../pages/LandingPage/veterinary";
import Nutrition from "../../pages/LandingPage/nutrition";
import Ayurvedic from "../../pages/LandingPage/ayurvedic";
import Homeopathy from "../../pages/LandingPage/homeopathy";
import Allopathy from "../../pages/LandingPage/allopathy";







export const AllRoutes = () => {
  const mobileView = useSelector((state) => state.mobileView);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Landing /> <Footer />
          </>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <>
            <Products /> <Footer />
          </>
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          <>
            <ProductDetail /> <Footer />
          </>
        }
      ></Route>
      <Route path="/Login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <OrderReview></OrderReview>
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/payment/details"
        element={
          <PrivateRoute>
            <PymentDetails></PymentDetails>
          </PrivateRoute>
        }
      ></Route>
     
     <Route
        path="/"
        element={
          <>
            <Landing /> <Footer />
          </>
        }
      ></Route>
<Route
        path="/"
        element={
          <>
            <HealthConcern /> <Footer />
          </>
        }
      ></Route>

<Route
        path="/heart-health"
        element={
          <>
            <HeartHealth /> 
          </>
        }
      ></Route>

<Route
        path="/fitness"
        element={
          <>
            <Fitness />

          </>
        }
      ></Route>

<Route
        path="/womens-health"
        element={
          <>
            <WomensHealth
             />

          </>
        }
      ></Route>


<Route
        path="/cancer-treatment"
        element={
          <>
            <CancerTreatment
             />

          </>
        }
      ></Route>

<Route
        path="/mental-health"
        element={
          <>
            <MentalHealth />

          </>
        }
      ></Route>



<Route
        path="/"
        element={
          <>
            <ShopBycategory /> <Footer />
          </>
        }
      ></Route>


<Route
        path="/veterinary"
        element={
          <>
            <Products />

          </>
        }
      ></Route>
      <Route
        path="/nutrition"
        element={
          <>
            <Products />

          </>
        }
      ></Route>
      <Route
        path="/homeopathy"
        element={
          <>
            <Products />

          </>
        }
      ></Route>
      <Route
        path="/ayurvedic"
        element={
          <>
            <Products />

          </>
        }
      ></Route>

<Route
        path="/allopathy"
        element={
          <>
            <Products />

          </>
        }
      ></Route>


















      <Route
        path="*"
        element={
          <>
            <ErrorPage /> <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
};
