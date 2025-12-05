export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

// Este código SOLO debe ejecutarse en navegador, no en Node
if (typeof document !== "undefined") {
  const btn = document.getElementById("btn");
  if (btn) {
    btn.addEventListener("click", () => {
      agregarItem("Nuevo ítem");
    });
  }
}
