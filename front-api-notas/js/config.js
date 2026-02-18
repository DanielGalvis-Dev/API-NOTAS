// URL API
const API = "http://localhost:3000";

// Obtener token
function getToken() {
  return localStorage.getItem("token") || "";
}
