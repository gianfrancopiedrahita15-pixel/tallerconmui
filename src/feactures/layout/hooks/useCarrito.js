import { useState } from "react";

export const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [drawerAbierto, setDrawerAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  const aumentarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const totalPrecio = carrito.reduce((acc, item) => {
    const precio = parseFloat(
      item.precio.replace("$", "").replace(",", ".")
    );
    return acc + precio * item.cantidad;
  }, 0);

  return {
    carrito,
    drawerAbierto,
    setDrawerAbierto,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
    aumentarCantidad,
    disminuirCantidad,
    totalItems,
    totalPrecio,
  };
};
