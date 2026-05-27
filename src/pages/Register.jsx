import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../services/authService"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] =
    useState("")
  const [confirmPassword,
    setConfirmPassword] = useState("")

  const [error, setError] =
    useState("")

  async function handleRegister(event) {

    event.preventDefault()

    // Empty validation
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {

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

    // Confirm password validation
    if (password !== confirmPassword) {

      setError(
        "Password and confirm password must match"
      )
      toast.error("Passwords do not match")

      return
    }

    try {

      const userData = {
        name,
        email,
        password
      }

      const response =
        await registerUser(userData)

      // Store token
      localStorage.setItem(
        "token",
        response.token
      )

      setError("")

      toast.success("Registration successful")

      navigate("/login")

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration failed"
      )
      toast.error("Registration failed")

    }

  }

  return (

    <main className="login-page">

      <section className="login-card">

        <p className="eyebrow">
          Create Account
        </p>

        <h1>Register</h1>

        <p className="login-copy">
          Create your store account and
          start managing your ecommerce
          dashboard.
        </p>

        <form onSubmit={handleRegister}>

          <label htmlFor="name">
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter full name"
            autoComplete="name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            required
          />

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
            placeholder="Create password"
            autoComplete="new-password"
            minLength="6"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />

          <label htmlFor="confirmPassword">
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            minLength="6"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(
                event.target.value
              )
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
            Register
          </button>

        </form>

        <p className="register-text">
          Already have an account?
          {" "}
          <Link to="/login">
            Login
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

export default Register
