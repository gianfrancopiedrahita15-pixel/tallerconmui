import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GitHubCard from './GitHubCard';

export const Content = ({ agregarAlCarrito, toggleFavorito, esFavorito }) => {

  const productos = [
    {
      id: 1,
      titulo: "Resident Evil Requiem",
      descripcion: "Juego de terror y supervivencia donde debes enfrentar criaturas y resolver misterios en un ambiente oscuro mientras luchas por sobrevivir.",
      precio: "$69.99",
      imagen: "../public/img/resident_evil_9_requiem.jpg",
    },
    {
      id: 2,
      titulo: "The Evil Within 2",
      descripcion: "Un juego de horror psicológico en el que el detective Sebastian Castellanos entra en un mundo lleno de pesadillas para rescatar a su hija.",
      precio: "$29.99",
      imagen: "../public/img/The_Evil_Within_2.webp",
    },
    {
      id: 3,
      titulo: "Astro Bot",
      descripcion: "Juego de plataformas colorido donde controlas a un pequeño robot que explora mundos llenos de desafíos, enemigos y secretos.",
      precio: "$59.99",
      imagen: "../public/img/astro_bot__2024.webp",
    },
    {
      id: 4,
      titulo: "Ghost of Yotei",
      descripcion: "Aventura de acción ambientada en el Japón feudal donde un samurái lucha contra la invasión mongola usando combate, sigilo y exploración.",
      precio: "$69.99",
      imagen: "../public/img/ghost_of_yotei.webp",
    },
    {
      id: 5,
      titulo: "Gran Turismo 7",
      descripcion: "Simulador de carreras realista que permite competir con una gran variedad de autos en pistas detalladas alrededor del mundo.",
      precio: "$69.99",
      imagen: "../public/img/gran_turistmo_7.avif",
    },
    {
      id: 6,
      titulo: "The Last of Us Part II",
      descripcion: "Juego de acción y supervivencia ambientado en un mundo postapocalíptico donde Ellie emprende un peligroso viaje marcado por la venganza.",
      precio: "$39.99",
      imagen: "../public/img/the_last_of_us_parte_2.webp",
    },
    {
      id: 7,
      titulo: "Until Dawn",
      descripcion: "Juego narrativo de terror donde las decisiones del jugador determinan quién sobrevive en una noche llena de misterios y peligro.",
      precio: "$19.99",
      imagen: "../public/img/until_dawn__2024.jpg",
    },
    {
      id: 8,
      titulo: "Uncharted 4: A Thief's End",
      descripcion: "Aventura de acción donde Nathan Drake busca un tesoro perdido mientras vive peligrosas persecuciones y exploraciones.",
      precio: "$19.99",
      imagen: "../public/img/uncharted_4.webp",
    },
    {
      id: 9,
      titulo: "Red Dead Redemption 2",
      descripcion: "Juego de mundo abierto ambientado en el viejo oeste que sigue la historia de un forajido mientras lucha por sobrevivir y mantener a su banda.",
      precio: "$59.99",
      imagen: "../public/img/red_dead_2.jpg",
    },
    {
      id: 10,
      titulo: "Marvel's Spider-Man 2",
      descripcion: "Juego de acción donde controlas a Spider-Man para proteger Nueva York enfrentando villanos y moviéndote por la ciudad con telarañas.",
      precio: "$69.99",
      imagen: "../public/img/marvel__039_s_spiderman_2.jpg",
    },
    {
      id: 11,
      titulo: "God of War Ragnarök",
      descripcion: "Aventura épica donde Kratos y su hijo Atreus enfrentan dioses y criaturas de la mitología nórdica durante el Ragnarök.",
      precio: "$69.99",
      imagen: "../public/img/god_of_war_ragnarok.jpg",
    },
    {
      id: 12,
      titulo: "Battlefield 6",
      descripcion: "Shooter de guerra con combates masivos, vehículos y batallas multijugador en mapas grandes con destrucción dinámica.",
      precio: "$59.99",
      imagen: "../public/img/battlefield__2025.jpg",
    },
  ];

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Nuestros Productos
      </Typography>

      <Grid container spacing={3}>
        {productos.map((producto) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={producto.id}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>

              {/* Botón favorito sobre la imagen */}
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={producto.imagen}
                  alt={producto.titulo}
                  sx={{ objectFit: "cover" }}
                />
                <Tooltip
                  title={esFavorito(producto.id) ? "Quitar de favoritos" : "Agregar a favoritos"}
                  arrow
                >
                  <IconButton
                    onClick={() => toggleFavorito(producto)}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(4px)",
                      boxShadow: 1,
                      color: esFavorito(producto.id) ? "error.main" : "grey.400",
                      transition: "color 0.2s, transform 0.2s",
                      "&:hover": {
                        bgcolor: "white",
                        color: "error.main",
                        transform: "scale(1.15)",
                      },
                      "@keyframes heartPop": {
                        "0%": { transform: "scale(1)" },
                        "50%": { transform: "scale(1.4)" },
                        "100%": { transform: "scale(1)" },
                      },
                      "& svg": esFavorito(producto.id)
                        ? { animation: "heartPop 0.3s cubic-bezier(0.34,1.56,0.64,1)" }
                        : {},
                    }}
                  >
                    {esFavorito(producto.id) ? (
                      <FavoriteIcon fontSize="small" />
                    ) : (
                      <FavoriteBorderIcon fontSize="small" />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{producto.titulo}</Typography>
                <Typography variant="body2">{producto.descripcion}</Typography>
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                  {producto.precio}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <GitHubCard />
      </Grid>
    </Container>
    
  );
};
