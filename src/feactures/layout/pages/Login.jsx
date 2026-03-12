import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useLogin } from "../hooks/useLogin";

export const Login = ({ onLoginExitoso }) => {
  const { usuario, setUsuario, contrasena, setContrasena, error, handleSubmit } =
    useLogin(onLoginExitoso);

  const [verContrasena, setVerContrasena] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0a0a0f",
        backgroundImage:
          "radial-gradient(ellipse at 20% 50%, rgba(0,112,243,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(120,0,255,0.1) 0%, transparent 50%)",
        px: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 420 }}>
        {/* Logo / Brand */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: "16px",
              bgcolor: "rgba(0,112,243,0.15)",
              border: "1px solid rgba(0,112,243,0.3)",
              mb: 2,
            }}
          >
            <SportsEsportsIcon sx={{ fontSize: 34, color: "#0070f3" }} />
          </Box>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              color: "#fff",
              letterSpacing: "-0.03em",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            PlayStation
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)", mt: 0.5 }}>
            Inicia sesión para continuar
          </Typography>
        </Box>

        {/* Card formulario */}
        <Card
          elevation={0}
          sx={{
            bgcolor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 3,
            backdropFilter: "blur(12px)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              {/* Error */}
              {error && (
                <Alert
                  severity="error"
                  sx={{
                    bgcolor: "rgba(239,68,68,0.1)",
                    color: "#fca5a5",
                    border: "1px solid rgba(239,68,68,0.2)",
                    "& .MuiAlert-icon": { color: "#ef4444" },
                  }}
                >
                  {error}
                </Alert>
              )}

              {/* Usuario */}
              <TextField
                label="Usuario"
                variant="outlined"
                fullWidth
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                autoComplete="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon sx={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={inputDarkStyles}
              />

              {/* Contraseña */}
              <TextField
                label="Contraseña"
                variant="outlined"
                fullWidth
                type={verContrasena ? "text" : "password"}
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setVerContrasena((prev) => !prev)}
                        edge="end"
                        size="small"
                        aria-label={verContrasena ? "Ocultar contraseña" : "Ver contraseña"}
                        sx={{
                          color: verContrasena
                            ? "#0070f3"
                            : "rgba(255,255,255,0.3)",
                          "&:hover": { color: "#0070f3", bgcolor: "rgba(0,112,243,0.1)" },
                          transition: "color 0.2s",
                        }}
                      >
                        {verContrasena ? (
                          <VisibilityOffIcon fontSize="small" />
                        ) : (
                          <VisibilityIcon fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={inputDarkStyles}
              />

              {/* Olvidé contraseña */}
              <Box sx={{ textAlign: "right", mt: -1 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0070f3",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Box>

              {/* Botón submit */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 0.5,
                  bgcolor: "#0070f3",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  borderRadius: 2,
                  py: 1.4,
                  boxShadow: "0 0 20px rgba(0,112,243,0.35)",
                  "&:hover": {
                    bgcolor: "#005ed4",
                    boxShadow: "0 0 28px rgba(0,112,243,0.5)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Iniciar sesión
              </Button>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 0.5 }} />

              {/* Registro */}
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)" }}>
                  ¿No tienes cuenta?{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: "#0070f3",
                      cursor: "pointer",
                      fontWeight: 600,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Regístrate gratis
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

// Estilos compartidos para inputs en fondo oscuro
const inputDarkStyles = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    bgcolor: "rgba(255,255,255,0.05)",
    borderRadius: 2,
    "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.25)" },
    "&.Mui-focused fieldset": { borderColor: "#0070f3" },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.35)",
    "&.Mui-focused": { color: "#0070f3" },
  },
};
