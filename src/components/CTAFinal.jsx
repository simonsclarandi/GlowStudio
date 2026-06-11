import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { siteConfig } from '../config/siteConfig';

export default function CTAFinal() {
  const { callToAction, contact } = siteConfig;

  const handleAgendaClick = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hola Glow Studio. Quisiera agendar un turno. ¿Tienen disponibilidad?`
    );
    window.open(`https://wa.me/${contact.phone}?text=${message}`, '_blank');
  };

  return (
    <section id="cta-final" className="py-20 bg-nude-light">
      <div className="px-6 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary-main md:text-4xl lg:text-5xl">
          {callToAction.title}
        </h2>
        <p className="mt-4 mb-8 text-lg text-gray-600 md:text-xl">
          {callToAction.subtitle}
        </p>
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          onClick={handleAgendaClick}
          sx={{
            px: 6,
            py: 2,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '9999px',
            bgcolor: 'secondary.main',
            color: 'primary.main',
            boxShadow: 4,
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 8,
              bgcolor: 'secondary.dark'
            },
            transition: 'all 0.3s ease'
          }}
        >
          {callToAction.ctaText}
        </Button>
      </div>
    </section>
  );
}