import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../services/authService"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] =
    useState("")

  const [error, setError] =
    useState("")

  async function handleLogin(event) {

    event.preventDefault()

    // Empty validation
    if (!email || !password) {

      setError("All fields are required")

      return
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/

    if (!emailRegex.test(email)) {

      setError("Invalid email format")

      return
    }

    // Password validation
    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters"
      )

      return
    }

    try {

      const userData = {
        email,
        password
      }

      const response =
        await loginUser(userData)

      // Store token
      localStorage.setItem(
        "token",
        response.token
      )

      setError("")

      toast.success("Login successful")

      navigate("/")

    } catch {

      setError("Login failed")
      toast.error("Login failed")

    }

  }

  return (

    <main className="login-page">

      <section className="login-card">

        <p className="eyebrow">
          Welcome Back
        </p>

        <h1>Login</h1>

        <p className="login-copy">
          Sign in to manage products,
          tenants, orders, and your
          ecommerce dashboard.
        </p>

        <form onSubmit={handleLogin}>

          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            minLength="6"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />

          {
            error && (
              <p
                className="form-error"
                aria-live="polite"
              >
                {error}
              </p>
            )
          }

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          {" "}
          <Link to="/register">
            Register
          </Link>
        </p>

        <p className="register-text">
          Forgot your password?
          {" "}
          <Link to="/forgot-password">
            Reset it
          </Link>
        </p>

      </section>

    </main>

  )
}

export default Login
