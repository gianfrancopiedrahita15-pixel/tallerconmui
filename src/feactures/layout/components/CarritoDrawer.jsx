import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button,
  Badge,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CarritoDrawer = ({
  carrito = [],              // ← valor por defecto
  drawerAbierto = false,     // ← valor por defecto
  setDrawerAbierto = () => {},
  eliminarDelCarrito = () => {},
  vaciarCarrito = () => {},
  aumentarCantidad = () => {},
  disminuirCantidad = () => {},
  totalItems = 0,
  totalPrecio = 0,
}) => {
  return (
    <>
      {/* Drawer lateral */}
      <Drawer
        anchor="right"
        open={drawerAbierto}
        onClose={() => setDrawerAbierto(false)}
      >
        <Box sx={{ width: 380, p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
          
          
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              🛒 Carrito ({totalItems})
            </Typography>
            <IconButton onClick={() => setDrawerAbierto(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          
          {carrito.length === 0 ? (
            <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography color="text.secondary">Tu carrito está vacío</Typography>
            </Box>
          ) : (
            <List sx={{ flex: 1, overflowY: "auto" }}>
              {carrito.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar
                        variant="rounded"
                        src={item.imagen}
                        alt={item.titulo}
                        sx={{ width: 60, height: 60, mr: 1 }}
                      />
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        <Typography variant="body2" fontWeight="bold" noWrap>
                          {item.titulo}
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 0.5 }}>
                          <Typography variant="body2" color="primary" fontWeight="bold">
                            {item.precio}
                          </Typography>

                          {/* Controles de cantidad */}
                          <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                            <IconButton size="small" onClick={() => disminuirCantidad(item.id)}>
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                            <Typography sx={{ mx: 1 }}>{item.cantidad}</Typography>
                            <IconButton size="small" onClick={() => aumentarCantidad(item.id)}>
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      }
                    />

                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => eliminarDelCarrito(item.id)}
                      sx={{ alignSelf: "center" }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          )}

          
          {carrito.length > 0 && (
            <Box sx={{ pt: 2 }}>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  ${totalPrecio.toFixed(2)}
                </Typography>
              </Box>

              <Button variant="contained" fullWidth sx={{ mb: 1 }}>
                Pagar ahora
              </Button>
              <Button variant="outlined" color="error" fullWidth onClick={vaciarCarrito}>
                Vaciar carrito
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};
