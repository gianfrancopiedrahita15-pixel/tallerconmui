import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

 export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 5,
        py: 2,
        textAlign: "center",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Gian Franco Piedrahita Diaz. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};




