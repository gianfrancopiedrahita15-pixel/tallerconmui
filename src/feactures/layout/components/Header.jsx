import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Tooltip,
  IconButton as MuiIconButton,
} from "@mui/material";

export const Header = ({
  totalItems,
  setDrawerAbierto,
  totalFavoritos,
  favoritos,
  toggleFavorito,
  limpiarFavoritos,
}) => {
  const [mobileMenuAbierto, setMobileMenuAbierto] = useState(false);
  const [favoritosDrawerAbierto, setFavoritosDrawerAbierto] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Menú móvil */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            onClick={() => setMobileMenuAbierto(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PlayStation
          </Typography>

          {/* Botón favoritos — desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <Button
              color="inherit"
              startIcon={
                <Badge badgeContent={totalFavoritos} color="error">
                  <FavoriteIcon />
                </Badge>
              }
              onClick={() => setFavoritosDrawerAbierto(true)}
            >
              Favoritos
            </Button>
          </Box>

          {/* Carrito */}
          <IconButton color="inherit" onClick={() => setDrawerAbierto(true)}>
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ── Drawer menú móvil ───────────────────────────────── */}
      <Drawer
        anchor="left"
        open={mobileMenuAbierto}
        onClose={() => setMobileMenuAbierto(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
            PlayStation
          </Typography>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setFavoritosDrawerAbierto(true);
                  setMobileMenuAbierto(false);
                }}
              >
                <ListItemIcon>
                  <Badge badgeContent={totalFavoritos} color="error">
                    <FavoriteIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Favoritos" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setDrawerAbierto(true);
                  setMobileMenuAbierto(false);
                }}
              >
                <ListItemIcon>
                  <Badge badgeContent={totalItems} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Carrito" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* ── Drawer de Favoritos ─────────────────────────────── */}
      <Drawer
        anchor="right"
        open={favoritosDrawerAbierto}
        onClose={() => setFavoritosDrawerAbierto(false)}
      >
        <Box
          sx={{
            width: { xs: "100vw", sm: 380 },
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Cabecera del drawer */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FavoriteIcon color="error" fontSize="small" />
              <Typography variant="h6" fontWeight={700}>
                Mis Favoritos
              </Typography>
              {totalFavoritos > 0 && (
                <Typography
                  variant="caption"
                  sx={{
                    bgcolor: "error.main",
                    color: "white",
                    borderRadius: "999px",
                    px: 1,
                    py: 0.25,
                    fontWeight: 700,
                  }}
                >
                  {totalFavoritos}
                </Typography>
              )}
            </Box>
            {totalFavoritos > 0 && (
              <Tooltip title="Limpiar lista" arrow>
                <IconButton size="small" onClick={limpiarFavoritos} color="error">
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Box>

          {/* Lista o estado vacío */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
            {totalFavoritos === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 1.5,
                  color: "text.secondary",
                  py: 8,
                }}
              >
                <FavoriteBorderIcon sx={{ fontSize: 56, color: "grey.300" }} />
                <Typography variant="body1" fontWeight={600} color="text.secondary">
                  Sin favoritos aún
                </Typography>
                <Typography variant="body2" textAlign="center" color="text.disabled">
                  Toca el corazón en cualquier juego para guardarlo aquí.
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {favoritos.map((producto) => (
                  <Card
                    key={producto.id}
                    elevation={0}
                    sx={{
                      display: "flex",
                      border: "1px solid",
                      borderColor: "grey.200",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={producto.imagen}
                      alt={producto.titulo}
                      sx={{ width: 80, objectFit: "cover", flexShrink: 0 }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
                      <CardContent sx={{ py: 1, px: 1.5, flex: 1 }}>
                        <Typography
                          variant="subtitle2"
                          fontWeight={700}
                          noWrap
                          title={producto.titulo}
                        >
                          {producto.titulo}
                        </Typography>
                        <Typography variant="body2" color="primary.main" fontWeight={700}>
                          {producto.precio}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ py: 0.5, px: 1 }}>
                        <Tooltip title="Quitar de favoritos" arrow>
                          <IconButton
                            size="small"
                            onClick={() => toggleFavorito(producto)}
                            sx={{ color: "error.main" }}
                          >
                            <FavoriteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </CardActions>
                    </Box>
                  </Card>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
