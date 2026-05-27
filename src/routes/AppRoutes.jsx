import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ForgotPassword from "../pages/ForgotPassword"
import ResetPassword from "../pages/ResetPassword"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Orders from "../pages/Orders"
import AddProduct from "../pages/AddProduct"
import AdminDashboard from "../pages/AdminDashboard"
import VendorDashboard from "../pages/VendorDashboard"
import UserDashboard from "../pages/UserDashboard"
import Profile from "../pages/Profile"
import TenantSettings from "../pages/TenantSettings"
import NotFound from "../pages/NotFound"

// ✅ NEW IMPORTS (Payment System)
import PaymentPage from "../pages/PaymentPage"
import PaymentSuccess from "../pages/PaymentSuccess"
import PaymentFailed from "../pages/PaymentFailed"
import OrderHistory from "../pages/OrderHistory"
import Invoice from "../pages/Invoice"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function AppRoutes() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("appTheme") || "light"
    const storedColor = localStorage.getItem("tenantThemeColor") || "#f97316"

    document.documentElement.dataset.theme = storedTheme
    document.documentElement.style.setProperty("--primary", storedColor)
  }, [])

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />

      <Routes>
        {/* ✅ BASIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* ✅ ORDER ROUTES */}
        <Route path="/orders" element={<Orders />} /> {/* existing */}
        <Route path="/order-history" element={<OrderHistory />} /> {/* new */}

        {/* ✅ PAYMENT ROUTES */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />

        {/* ✅ INVOICE */}
        <Route path="/invoice" element={<Invoice />} />

        {/* ✅ DASHBOARD & USER */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<TenantSettings />} />

        {/* ✅ ADMIN & VENDOR */}
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/vendor" element={<VendorDashboard />} />

        {/* ✅ NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
