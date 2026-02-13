// =======================================
// 1️⃣ CLASE TAREA (POO)
// =======================================

class Tarea {
  constructor(id, descripcion, fechaLimite = null) {
    this.id = id;
    this.descripcion = descripcion;
    this.estado = false;
    this.fechaCreacion = new Date();
    this.fechaLimite = fechaLimite;
  }

  cambiarEstado() {
    this.estado = !this.estado;
  }
}

// =======================================
// 2️⃣ CLASE GESTOR DE TAREAS
// =======================================

class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
    this.guardarLocal();
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardarLocal();
  }

  guardarLocal() {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  cargarLocal() {
    const datos = JSON.parse(localStorage.getItem("tareas")) || [];
    this.tareas = datos;
  }
}

// =======================================
// 3️⃣ INSTANCIA
// =======================================

const gestor = new GestorTareas();
gestor.cargarLocal();

// =======================================
// 4️⃣ SELECTORES DOM
// =======================================

const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const notification = document.getElementById("notification");

// =======================================
// 5️⃣ RENDERIZAR TAREAS
// =======================================

const renderizar = () => {
  taskList.innerHTML = "";

  gestor.tareas.forEach(({ id, descripcion, estado, fechaLimite }) => {

    const li = document.createElement("li");
    li.textContent = descripcion;
    li.classList.toggle("completed", estado);

    // Click → cambiar estado
    li.addEventListener("click", () => {
      const tarea = gestor.tareas.find(t => t.id === id);
      tarea.cambiarEstado();
      gestor.guardarLocal();
      renderizar();
    });

    // Doble click → eliminar
    li.addEventListener("dblclick", () => {
      gestor.eliminarTarea(id);
      renderizar();
    });

    // =======================================
    // CONTADOR Y VALIDACIÓN DE FECHA
    // =======================================

    if (fechaLimite) {
      const ahora = new Date();
      const limite = new Date(fechaLimite);

      const countdown = document.createElement("small");
      countdown.style.marginLeft = "10px";
      li.appendChild(countdown);

      // Si ya está vencida al crearla
      if (limite <= ahora) {
        countdown.textContent = " - ⏰ Tarea vencida";
      } 
      // Si es futura
      else {
        const interval = setInterval(() => {
          const diff = limite - new Date();

          if (diff <= 0) {
            countdown.textContent = " - ⏰ Tiempo vencido";
            clearInterval(interval);
          } else {
            const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
            countdown.textContent = ` - ${dias}d ${horas}h restantes`;
          }
        }, 1000);
      }
    }

    taskList.appendChild(li);
  });
};

// =======================================
// 6️⃣ AGREGAR TAREA (setTimeout)
// =======================================

form.addEventListener("submit", e => {
  e.preventDefault();

  const descripcion = document.getElementById("description").value;
  const fecha = document.getElementById("dueDate").value;

  // Simulación de retardo (asincronía)
  setTimeout(() => {

    const nuevaTarea = new Tarea(
      Date.now(),
      descripcion,
      fecha || null
    );

    gestor.agregarTarea(nuevaTarea);
    renderizar();

    mostrarNotificacion("✅ Tarea agregada correctamente");

  }, 1000);

  form.reset();
});

// =======================================
// 7️⃣ NOTIFICACIÓN (setTimeout)
// =======================================

function mostrarNotificacion(mensaje) {
  notification.textContent = mensaje;

  setTimeout(() => {
    notification.textContent = "";
  }, 2000);
}

// =======================================
// 8️⃣ CONSUMO DE API (async/await + try/catch)
// =======================================

async function cargarTareasAPI() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=3"
    );

    const data = await response.json();

    data.forEach(({ id, title }) => {
      const tarea = new Tarea(`api-${id}`, title);
      gestor.agregarTarea(tarea);
    });

    renderizar();

  } catch (error) {
    console.error("Error al cargar API:", error);
  }
}

// =======================================
// 9️⃣ INICIALIZACIÓN
// =======================================

cargarTareasAPI();
renderizar();
