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

      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <div className="w-full max-w-4xl">
          {/* Textos centrados */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="mb-6 text-4xl font-black leading-none tracking-tight text-primary-main md:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <h2 className="mb-8 max-w-2xl text-2xl font-semibold leading-tight text-secondary-main md:text-2xl lg:text-3xl">
              {hero.subtitle}
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-700 whitespace-pre-line md:text-xl lg:text-2xl">
              {hero.description}
            </p>
          </div>

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
    </section>
  );
}