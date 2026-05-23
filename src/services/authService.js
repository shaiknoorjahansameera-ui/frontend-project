export async function registerUser(userData) {

  const response = await fetch(
    "http://localhost:5000/api/auth/register",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(userData)
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

export async function loginUser(userData) {

  const response = await fetch(
    "http://localhost:5000/api/auth/login",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(userData)
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}