const productos = [
  { nombre: "Camiseta básica", precio: "$19.99" },
  { nombre: "Zapatos deportivos", precio: "$49.99" },
  { nombre: "Mochila urbana", precio: "$29.99" },
  { nombre: "Audífonos inalámbricos", precio: "$59.99" },
  { nombre: "Reloj digital", precio: "$39.99" },
  { nombre: "Gorra casual", precio: "$14.99" },
];

const contenedor = document.getElementById("productos");

productos.forEach((producto, index) => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="https://picsum.photos/300/200?random=${index}" alt="${producto.nombre}" />
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <button>Agregar al carrito</button>
  `;
  contenedor.appendChild(div);
});
