const API = import.meta.env.VITE_API_URL;

export async function registerUser(userData) {
  const response = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

export async function loginUser(userData) {
  const response = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}