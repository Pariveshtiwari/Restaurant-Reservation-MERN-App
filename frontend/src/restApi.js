
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export async function createReservation(data) {
  const response = await fetch(`${BACKEND_URL}/api/v1/reservation/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create reservation");
  }
  return await response.json();
}

export { BACKEND_URL };
