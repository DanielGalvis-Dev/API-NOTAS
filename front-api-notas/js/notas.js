// ===== ELEMENTOS =====
const tituloNota = document.getElementById("tituloNota");
const cuerpoNota = document.getElementById("cuerpoNota");
const marcaNota = document.getElementById("marcaNota");
const listaNotas = document.getElementById("listaNotas");

// ===== ESTADO =====
let notaEditando = null;

// ===== CREAR =====
async function crearNota() {
  await fetch(API + "/notas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify({
      titulo: tituloNota.value,
      cuerpo: cuerpoNota.value,
      marca: marcaNota.value,
    }),
  });

  alert("Nota creada");
  limpiarCampos();
  obtenerNotas();
}

// ===== OBTENER =====
async function obtenerNotas() {
  const res = await fetch(API + "/notas", {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  if (!res.ok) return alert("No autorizado");

  const notas = await res.json();

  listaNotas.innerHTML = "";

  notas.forEach((n) => {
    listaNotas.innerHTML += `
    <li class="border p-3 rounded bg-gray-50 flex flex-col sm:flex-row sm:justify-between gap-2">
        <span class="break-words">
            <b>${n.titulo}</b> - ${n.cuerpo} (${n.marca})
        </span>

        <div class="flex flex-row flex-wrap gap-2">
            <button
            onclick="cargarNota(${n.id}, '${n.titulo}', '${n.cuerpo}', '${n.marca}')"
            class="bg-yellow-500 text-white px-2 py-1 rounded w-full sm:w-auto cursor-pointer"
            >
            Editar
            </button>

            <button
            onclick="eliminarNota(${n.id})"
            class="bg-red-500 text-white px-2 py-1 rounded w-full sm:w-auto cursor-pointer"
            >
            Eliminar
            </button>
        </div>
    </li>

    `;
  });
}

// ===== ELIMINAR =====
async function eliminarNota(id) {
  if (!confirm("¿Eliminar esta nota?")) return;

  await fetch(API + "/notas/" + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  alert("Nota eliminada");
  obtenerNotas();
}

// ===== CARGAR PARA EDITAR =====
function cargarNota(id, titulo, cuerpo, marca) {
  tituloNota.value = titulo;
  cuerpoNota.value = cuerpo;
  marcaNota.value = marca;

  notaEditando = id;
}

// ===== EDITAR =====
async function editarNota() {
  if (!notaEditando) return alert("Selecciona una nota");

  await fetch(API + "/notas/" + notaEditando, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify({
      titulo: tituloNota.value,
      cuerpo: cuerpoNota.value,
      marca: marcaNota.value,
    }),
  });

  alert("Nota actualizada");
  limpiarCampos();
  obtenerNotas();
}

// ===== GUARDAR (CREAR O EDITAR) =====
function guardarNota() {
  if (notaEditando) editarNota();
  else crearNota();
}

// ===== LIMPIAR =====
function limpiarCampos() {
  tituloNota.value = "";
  cuerpoNota.value = "";
  marcaNota.value = "";
  notaEditando = null;
}
