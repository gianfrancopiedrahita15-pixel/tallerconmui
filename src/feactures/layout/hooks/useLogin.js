import { useState } from "react";

export function useLogin(onLoginExitoso) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!usuario.trim()) {
      setError("El campo de usuario es obligatorio.");
      return;
    }
    if (!contrasena.trim()) {
      setError("El campo de contraseña es obligatorio.");
      return;
    }
    if (contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Aquí conectas con tu backend / autenticación real.
    // Por ahora simula login exitoso:
    if (onLoginExitoso) onLoginExitoso({ usuario });
  };

  return {
    usuario,
    setUsuario,
    contrasena,
    setContrasena,
    error,
    handleSubmit,
  };
}
