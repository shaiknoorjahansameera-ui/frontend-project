import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useLocation, useNavigate } from "react-router-dom"

function ResetPassword() {
  const navigate = useNavigate()
  const location = useLocation()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const email = location.state?.email || ""

  function handleResetPassword(event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError("Password and confirm password must match.")
      setMessage("")
      toast.error("Passwords do not match")
      return
    }

    setError("")
    setMessage("Password reset successfully. Redirecting to login...")
    toast.success("Password reset successfully")

    setTimeout(() => {
      navigate("/login")
    }, 900)
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="eyebrow">Secure Reset</p>
        <h1>Reset Password</h1>
        <p className="login-copy">
          Create a new password for {email || "your customer account"}.
        </p>

        <form onSubmit={handleResetPassword}>
          <label htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            type="password"
            placeholder="Create new password"
            autoComplete="new-password"
            minLength="6"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <label htmlFor="resetConfirmPassword">Confirm Password</label>
          <input
            id="resetConfirmPassword"
            type="password"
            placeholder="Confirm new password"
            autoComplete="new-password"
            minLength="6"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />

          {error && <p className="form-error" aria-live="polite">{error}</p>}
          {message && (
            <p className="form-success" aria-live="polite">{message}</p>
          )}

          <button type="submit">Reset Password</button>
        </form>

        <p className="register-text">
          Back to <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  )
}

export default ResetPassword
