function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  return (
    <div
      style={{
        padding: "30px"
      }}
    >
      <h1>
        Welcome Back {user?.name} 🚀
      </h1>

      <h2>
        Multi-Tenant E-Commerce SaaS Platform
      </h2>
    </div>
  )
}

export default Dashboard