// src/config/siteConfig.js
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SpaIcon from '@mui/icons-material/Spa';

export const siteConfig = {
  brand: {
    name: "Glow Studio",
    shortName: "GlowStudio",
    highlightName: "Glow Studio",
    logo: "/GlowStudioLogo.png",
    colors: {
      primary: "#2E292E",        // Texto oscuro elegante
      primaryMain: "#21201E",    // Sombra ligeramente más clara
      secondary: "#CFAE7C",      // Detalle dorado
      secondaryMain: "#B8965E",
      background: "#FDFDF9",     // Fondo blanco/nude muy suave
      surface: "#FFFFFF",        // Superficies limpias
    }
  },

  navLinks: [
    { text: 'Inicio', href: '#hero' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Contacto', href: '#cta-final' },
  ],
  contact: {
    phone: "5493515146748",
    phoneDisplay: "+54 9 351 514-6748",
    address: "Ruta del Silencio 124 | B° Luminaria, Córdoba",
    mapUrl: "https://maps.app.goo.gl/KVqfLe1i335vFTTc8",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4359.143259339456!2d-64.25779322341536!3d-31.394303895185992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f1a10ecd5c7%3A0xaa8d7713be496c77!2sGLOW%20STUDIO!5e1!3m2!1ses-419!2sar!4v1780318008478!5m2!1ses-419!2sar",
    social: {
      instagram: "https://www.instagram.com/glowstudioarte/"
    }
  },

  problemSection: {
    title: 'Transformamos tu piel',
    subtitle: 'Belleza sin límites',
    quotes: [
      'Tu piel merece lo mejor',
      'Resultados visibles desde la primera sesión',
      'Cuidado profesional y personalizado'
    ],
    solution: {
      headline: 'Nuestro método',
      highlight: 'Tecnología avanzada + toque humano',
      description: 'En Glow Studio combinamos tratamientos de última generación con un enfoque personalizado para que cada visita sea una experiencia única.',
      videoUrl: '' // dejar vacío si no hay video
    }
  },
  whyChooseUs: {
    title: "¿Por qué elegir",
    titleHighlight: "Glow Studio ?",
    items: [
      {
        title: 'Calidad',
        description: 'Tratamientos con productos premium y profesionales certificados.',
        icon: CheckCircleIcon,
        usePrimaryColor: true
      },
      {
        title: 'Tecnología',
        description: 'Equipos de última generación para resultados óptimos.',
        icon: SmartToyIcon,
        usePrimaryColor: false
      },
      {
        title: 'Atención',
        description: 'Asesoría personalizada en cada visita.',
        icon: SupportAgentIcon,
        usePrimaryColor: true
      },
      {
        title: 'Comodidad',
        description: 'Ambiente relajado y horarios flexibles.',
        icon: SpaIcon,
        usePrimaryColor: false
      }
    ]
  },
  hero: {
    backgroundImage: "/HeroBackgroundGlow.jpg",
    title: "Resaltamos tu belleza natural.",
    subtitle: "Tratamientos exclusivos y personalizados para el cuidado de tu piel.",
    description: "Descubre la experiencia Glow Studio: cuidado de la piel con tecnología avanzada y un toque de lujo.",
    ctaText: "Agendar mi turno",
    ctaLink: "#"
  },

  appointment: {
    tagline: "Cotizá rápido",
    title: "Cotizamos tu tratamiento",
    description: "Dejanos tu lista de servicios y te respondemos por WhatsApp con los precios y disponibilidad.",
    formFields: {
      name: "Tu Nombre",
      phone: "Teléfono / WhatsApp",
      service: "Categoría principal",
      message: "Detallá los servicios que necesitás",
      submitText: "Enviar lista por WhatsApp"
    },
    mapButtonText: "Ver ubicación en Google Maps"
  },
  services: {
    title: "Nuestros Servicios",
    titleHighlight: "Exclusivos y Personalizados",
    description: "En Glow Studio combinamos ciencia y arte para realzar tu belleza natural.",
    items: [
      {
        title: "Limpieza Facial Profunda",
        subtitle: "Purifica y renueva",
        description: "Elimina impurezas y células muertas para una piel radiante.",
        image: "/services/limpieza.jpg"
      },
      {
        title: "Lifting de Pestañas",
        subtitle: "Abre tu mirada",
        description: "Eleva y da volumen a tus pestañas con técnica profesional.",
        image: "/services/lifting.jpg"
      },
      {
        title: "Depilación Definitiva Láser",
        subtitle: "Silencio permanente",
        description: "Elimina el vello de forma duradera y sin molestias.",
        image: "/services/depilacion.jpg"
      },
      {
        title: "Masajes Relajantes",
        subtitle: "Bienestar total",
        description: "Relaja cuerpo y mente con masajes terapéuticos de aroma.",
        image: "/services/masaje.jpg"
      }
    ]
  },

  // CTA final
  callToAction: {
    title: "Reserva tu turno online en segundos",
    subtitle: "Agenda tu cita en menos de un minuto",
    ctaText: "Agendar cita en WhatsApp",
    ctaLink: "https://wa.me/5493515146748"
  },

  // Footer
  footer: {
    description: "Glow Studio - Tu espacio de belleza y bienestar.",
    sections: {
      navigationTitle: "Navegación",
      treatmentsTitle: "Servicios",
      contactTitle: "Contacto"
    },
    copy: `© ${new Date().getFullYear()} Glow Studio - Todos los derechos reservados.`,
    links: [
      { text: "Política de Privacidad", href: "#" },
      { text: "Términos de Uso", href: "#" }
    ]
  },

  serviceOptions: [
    'Limpieza Facial',
    'Lifting de Pestañas',
    'Depilación Láser',
    'Masajes Relajantes'
  ],

  getWhatsAppMessage: (name, phone, service, message) => {
    return encodeURIComponent(
      `Hola Glow Studio. Quería reservar ${service}.\n\n` +
      `👤 ${name}\n` +
      `🛠️ ${service}\n\n` +
      `*Detalles:*\n${message}`
    );
  }
};