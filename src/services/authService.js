const API_BASE_URL = import.meta.env.VITE_API_URL

async function requestAuth(path, userData) {
  const response = await fetch(`${API_BASE_URL}/api/auth/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

export function registerUser(userData) {
  return requestAuth("register", userData)
}

export function loginUser(userData) {
  return requestAuth("login", userData)
}
