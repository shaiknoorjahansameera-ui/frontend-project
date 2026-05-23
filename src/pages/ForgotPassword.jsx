import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  function handleForgotPassword(event) {
    event.preventDefault()
    toast.success("Reset flow started")
    navigate("/reset-password", { state: { email } })
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="eyebrow">Account Recovery</p>
        <h1>Forgot Password</h1>
        <p className="login-copy">
          Enter your registered email and continue to reset your customer
          account password.
        </p>

        <form onSubmit={handleForgotPassword}>
          <label htmlFor="forgotEmail">Email Address</label>
          <input
            id="forgotEmail"
            type="email"
            placeholder="Enter registered email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button type="submit">Continue</button>
        </form>

        <p className="register-text">
          Remember password? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  )
}

export default ForgotPassword
