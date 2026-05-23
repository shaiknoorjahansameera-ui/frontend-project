import { useState } from "react"

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Profile Updated ✅")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="New Password"
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  )
}

export default Profile