import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/loader/Loader';






const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ProductsPage = lazy(()=>import('../pages/productsPage/ProductsPage'))
const CartPage = lazy(()=>import('../pages/cartPage/CartPage'))
const ProductDetailsPage = lazy(()=> import('../pages/productDetailsPage/ProductDetailsPage'))
const NoPage = lazy(() => import('../pages/noPage/NoPage'));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Suspense>  
  )
}

export default AppRoutes;