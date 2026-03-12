import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Header } from './feactures/layout/components/Header';
import { Content } from './feactures/layout/components/Content';
import { Footer } from './feactures/layout/components/Footer';
import { CarritoDrawer } from './feactures/layout/components/CarritoDrawer';
import { useCarrito } from './feactures/layout/hooks/useCarrito';
import { useFavoritos } from './feactures/layout/hooks/useFavoritos';
import { Login } from './feactures/layout/pages/Login';

function App() {
  const [logueado, setLogueado] = useState(false);

  const {
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
  } = useCarrito();

  const {
    favoritos,
    toggleFavorito,
    esFavorito,
    limpiarFavoritos,
    totalFavoritos,
  } = useFavoritos();

  // Si no está logueado, muestra solo el formulario de login
  if (!logueado) {
    return <Login onLoginExitoso={() => setLogueado(true)} />;
  }

  // Una vez logueado, muestra la app completa
  return (
    <HashRouter>
      <Header
        totalItems={totalItems}
        setDrawerAbierto={setDrawerAbierto}
        totalFavoritos={totalFavoritos}
        favoritos={favoritos}
        toggleFavorito={toggleFavorito}
        limpiarFavoritos={limpiarFavoritos}
      />
      <CarritoDrawer
        carrito={carrito}
        drawerAbierto={drawerAbierto}
        setDrawerAbierto={setDrawerAbierto}
        eliminarDelCarrito={eliminarDelCarrito}
        vaciarCarrito={vaciarCarrito}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        totalItems={totalItems}
        totalPrecio={totalPrecio}
      />
      <Content
        agregarAlCarrito={agregarAlCarrito}
        toggleFavorito={toggleFavorito}
        esFavorito={esFavorito}
      />
      <Footer />
    </HashRouter>
  );
}

export default App;
