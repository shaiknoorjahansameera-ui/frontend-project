import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/login")
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        backgroundColor: "black",
        color: "white"
      }}
    >

      <h2>My Store</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center"
        }}
      >
        <h3>
          Welcome {user?.name}
        </h3>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

    </div>
  )
}

export default Navbar