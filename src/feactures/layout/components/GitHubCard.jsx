import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

const GitHubCard = () => {
  const repoUrl = 'https://github.com/gianfrancopiedrahita15-pixel/tallerconmui';

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        borderRadius: '16px',
        padding: { xs: '2rem', md: '3rem' },
        textAlign: 'center',
        maxWidth: '700px',
        margin: '2rem auto',
        boxShadow: '0 8px 32px rgba(0, 112, 209, 0.3)',
        border: '1px solid rgba(0, 112, 209, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at center, rgba(0,112,209,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }
      }}
    >
      {/* Icono decorativo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <CodeIcon sx={{ color: '#0070D1', fontSize: 32 }} />
        <GitHubIcon sx={{ color: '#fff', fontSize: 32 }} />
      </Box>

      {/* Título */}
      <Typography
        variant="h5"
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          mb: 1.5,
          letterSpacing: '0.5px',
        }}
      >
        Explora el código del proyecto
      </Typography>

      {/* Descripción */}
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255,255,255,0.7)',
          mb: 3,
          lineHeight: 1.7,
          maxWidth: '500px',
          margin: '0 auto 2rem auto',
        }}
      >
        Este proyecto fue desarrollado con <strong style={{ color: '#0070D1' }}>React</strong> y{' '}
        <strong style={{ color: '#0070D1' }}>Material UI</strong> como una tienda virtual moderna.
        Puedes revisar el código completo, aprender de su estructura o usarlo como base para tus
        propios proyectos.
      </Typography>

      {/* Botón */}
      <Button
        variant="contained"
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<GitHubIcon />}
        sx={{
          backgroundColor: '#0070D1',
          color: '#fff',
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: '8px',
          textTransform: 'none',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#005bb5',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 112, 209, 0.5)',
          },
        }}
      >
        Ver repositorio en GitHub
      </Button>
    </Box>
  );
};

export default GitHubCard;
