let carritoContador = 0;
const botones = document.querySelectorAll("button");
const carrito = document.getElementById("carrito");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    carritoContador++;
    carrito.textContent = `Carrito (${carritoContador})`;
  });
});
