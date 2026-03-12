import { useState, useCallback } from "react";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = useCallback((producto) => {
    setFavoritos((prev) => {
      const existe = prev.some((item) => item.id === producto.id);
      if (existe) return prev.filter((item) => item.id !== producto.id);
      return [...prev, producto];
    });
  }, []);

  const esFavorito = useCallback(
    (productoId) => favoritos.some((item) => item.id === productoId),
    [favoritos]
  );

  const limpiarFavoritos = useCallback(() => setFavoritos([]), []);

  return {
    favoritos,
    toggleFavorito,
    esFavorito,
    limpiarFavoritos,
    totalFavoritos: favoritos.length,
  };
}
