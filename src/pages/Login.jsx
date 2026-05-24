import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {

    const token = localStorage.getItem("token")

    if (token) {
      navigate("/")
    }

  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      )

      localStorage.setItem(
        "token",
        response.data.token
      )

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      )

      alert("Login Successful ✅")

      navigate("/")

    } catch (error) {

      alert("Login Failed ❌")

      console.log(error)

    }
  }

  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto"
      }}
    >
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  )
}

export default Login