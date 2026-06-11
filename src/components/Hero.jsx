import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const { hero, contact } = siteConfig;

  const handleAgendaClick = (e) => {
    e.preventDefault();
    // Simula la apertura de WhatsApp
    const message = encodeURIComponent(
      `Hola Glow Studio. Quisiera agendar un turno para conocer sus tratamientos.`
    );
    window.open(`https://wa.me/${contact.phone}?text=${message}`, '_blank');
  };

  return (
    <section
      className="relative flex min-h-[calc(100vh-96px)] items-center overflow-hidden bg-cover bg-center px-5 py-20"
      style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
    >
      {/* Overlay sutil en tonos nude pastel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFDF9]/95 via-[#FDFDF9]/85 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Contenedor principal para mantener todo agrupado y que no se estire demasiado en monitores grandes */}
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          
          {/* 1. Título y Subtítulo Centrados */}
          <div className="w-full text-center mb-8">
            <h1 className="mb-4 text-4xl font-black leading-none tracking-tight text-primary-main md:text-5xl lg:text-6xl text-[#2D2D2D]">
              {hero.title}
            </h1>
            <h2 className="text-xl font-semibold leading-tight text-secondary-main md:text-2xl text-[#C6A67A]">
              {hero.subtitle}
            </h2>
          </div>

          {/* 2. Descripción y Botón a la Izquierda */}
          <div className="w-full flex flex-col items-start text-left">
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {hero.description}
            </p>

          {/* Botón principal */}
          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center">
            <Button
              variant="contained"
              size="large"
              startIcon={<CalendarMonthIcon />}
              onClick={handleAgendaClick}
              sx={{
                px: 5,
                py: 1.7,
                boxShadow: 3,
                bgcolor: 'secondary.main',
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                borderRadius: '9999px',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  boxShadow: 6
                }
              }}
            >
              {hero.ctaText}
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}