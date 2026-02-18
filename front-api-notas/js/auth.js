// ===== ELEMENTOS =====
const sesion = document.getElementById("sesion");
const btnLogout = document.getElementById("btnLogout");

const regUser = document.getElementById("regUser");
const regPass = document.getElementById("regPass");

const logUser = document.getElementById("logUser");
const logPass = document.getElementById("logPass");

const authSection = document.getElementById("authSection");
const crateNotas = document.getElementById("crateNotas");

// ===== AL CARGAR =====
window.onload = function () {
  const user = localStorage.getItem("username");
  loadSesion(user);
};

// ===== REGISTRO =====
async function register() {
  const username = regUser.value;
  const password = regPass.value;

  const res = await fetch(API + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) return alert("Error al registrar");

  alert("Usuario creado");
  regUser.value = "";
  regPass.value = "";
}

// ===== LOGIN =====
async function login() {
  const username = logUser.value;
  const password = logPass.value;

  const res = await fetch(API + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) return alert("Credenciales incorrectas");

  const data = await res.json();

  localStorage.setItem("token", data.token);
  localStorage.setItem("username", username);

  alert("Login exitoso");

  logUser.value = "";
  logPass.value = "";

  loadSesion(username);
}

// ===== MOSTRAR SESION =====
function loadSesion(username) {
  if (username) {
    sesion.textContent = "Sesión activa: " + username;
    btnLogout.style.display = "inline-block";
    authSection.style.display = "none";
    crateNotas.style.display = "block";
    obtenerNotas(); // cargar notas si hay sesión
  } else {
    sesion.textContent = "No hay sesión iniciada";
    btnLogout.style.display = "none";
    crateNotas.style.display = "none";
  }
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  alert("Sesión cerrada");
  location.reload();
}
