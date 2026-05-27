import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"

function getTenantBrand() {
  return {
    name: localStorage.getItem("tenantStoreName") || "MarketSphere",
    logo: localStorage.getItem("tenantStoreLogo") || "",
    theme: localStorage.getItem("appTheme") || "light"
  }
}

function Navbar() {
  const navigate = useNavigate()
  const [brand, setBrand] = useState(getTenantBrand)
  const isLoggedIn = localStorage.getItem("token")

  useEffect(() => {
    function syncTenantBrand() {
      setBrand(getTenantBrand())
    }

    window.addEventListener("tenant-settings-updated", syncTenantBrand)
    window.addEventListener("storage", syncTenantBrand)

    return () => {
      window.removeEventListener("tenant-settings-updated", syncTenantBrand)
      window.removeEventListener("storage", syncTenantBrand)
    }
  }, [])

  function handleLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("isCustomerLoggedIn")
    toast.success("Logged out successfully")
    navigate("/login")
  }

  function toggleTheme() {
    const nextTheme = brand.theme === "dark" ? "light" : "dark"
    localStorage.setItem("appTheme", nextTheme)
    document.documentElement.dataset.theme = nextTheme
    setBrand((current) => ({ ...current, theme: nextTheme }))
    window.dispatchEvent(new Event("tenant-settings-updated"))
    toast.success(`${nextTheme === "dark" ? "Dark" : "Light"} mode enabled`)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-logo">
          {brand.logo ? (
            <img src={brand.logo} alt={`${brand.name} logo`} />
          ) : (
            brand.name.slice(0, 2).toUpperCase()
          )}
        </span>
        <span>{brand.name}</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/vendor">Vendor</Link>
        <Link to="/settings">Settings</Link>
        <button type="button" onClick={toggleTheme}>
          {brand.theme === "dark" ? "Light" : "Dark"}
        </button>

        {!isLoggedIn ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <div className="user-menu">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>

            <button type="button" onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
