import { useMemo, useState } from 'react';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  SvgIcon
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
//import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { siteConfig } from '../config/siteConfig';
import { PopupButton } from 'react-calendly';

const initialForm = {
  name: '',
  phone: '',
  service: '',
  message: ''
};

export default function Appointment() {
  const { appointment, contact, serviceOptions } = siteConfig;
  const [formData, setFormData] = useState(initialForm);
  const [touched, setTouched] = useState({});

  const isFormReady = Boolean(formData.name.trim() && formData.phone.trim() && formData.service);

  const whatsappUrl = useMemo(() => {
    if (!isFormReady) return `https://wa.me/${contact.phone}`;

    const message = siteConfig.getWhatsAppMessage(
      formData.name.trim(),
      formData.phone.trim(),
      formData.service,
      formData.message.trim() || 'Sin mensaje adicional.'
    );

    return `https://wa.me/${contact.phone}?text=${message}`;
  }, [contact.phone, formData, isFormReady]);

  const handleChange = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value
    }));
  };

  const handleBlur = (field) => () => {
    setTouched((current) => ({
      ...current,
      [field]: true
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ name: true, phone: true, service: true });

    if (!isFormReady) return;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col justify-center">
            <span className="flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-primary-main">
              <CalendarMonthIcon fontSize="small" />
              {appointment.tagline}
            </span>

            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-secondary-main md:text-5xl">
              {appointment.title}
            </h2>

            <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-600">
              {appointment.description}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="p-5 border border-gray-100 rounded-lg bg-gray-50">
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 1 }}>
                  WhatsApp
                </Typography>
                <p className="mt-1 text-lg font-bold text-secondary-main">{contact.phoneDisplay}</p>
              </div>

              <div className="p-5 border border-gray-100 rounded-lg bg-gray-50">
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 1 }}>
                  Ubicación
                </Typography>
                <p className="mt-1 text-lg font-bold text-secondary-main">{contact.address}</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 border border-gray-100 shadow-xl bg-gray-50 rounded-2xl md:p-8"
          >
            <div className="grid grid-cols-1 gap-5">
              <TextField
                label={appointment.formFields.name}
                value={formData.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                error={Boolean(touched.name && !formData.name.trim())}
                helperText={touched.name && !formData.name.trim() ? 'Ingresá tu nombre.' : ' '}
                fullWidth
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    )
                  }
                }}
              />

              <TextField
                label={appointment.formFields.phone}
                value={formData.phone}
                onChange={handleChange('phone')}
                onBlur={handleBlur('phone')}
                error={Boolean(touched.phone && !formData.phone.trim())}
                helperText={touched.phone && !formData.phone.trim() ? 'Ingresá un teléfono de contacto.' : ' '}
                fullWidth
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    )
                  }
                }}
              />

              <FormControl fullWidth required error={Boolean(touched.service && !formData.service)}>
                <InputLabel id="appointment-service-label">{appointment.formFields.service}</InputLabel>
                <Select
                  labelId="appointment-service-label"
                  label={appointment.formFields.service}
                  value={formData.service}
                  onChange={handleChange('service')}
                  onBlur={handleBlur('service')}
                                  >
                  {serviceOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <p className={`min-h-6 mt-1 ml-4 text-xs ${touched.service && !formData.service ? 'text-red-600' : 'text-transparent'}`}>
                  Seleccioná un servicio.
                </p>
              </FormControl>

              <TextField
                label={appointment.formFields.message}
                value={formData.message}
                onChange={handleChange('message')}
                fullWidth
                multiline
                minRows={4}
                slotProps={{
                  input: {
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                      <SvgIcon color="primary">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                disabled={!isFormReady}
                sx={{
                  py: 1.6,
                  mt: 1,
                  bgcolor: 'secondary.main',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'primary.main', color: 'secondary.main' }
                }}
              >
                {appointment.formFields.submitText}
              </Button>
              <PopupButton
                url="https://calendly.com/simonsclarandi-lp/30min"
                rootElement={document.getElementById('root')}
                text="AGENDAR MI TURNO"
                className="px-8 py-4 bg-[#C6A67A] text-white font-bold rounded-full shadow-lg hover:bg-[#B39368] transition-all"
              />
              
            </div>
          </form>
        </div>

        <div id="contacto" className="grid grid-cols-1 gap-6 mt-12 overflow-hidden border border-gray-100 shadow-lg rounded-2xl lg:grid-cols-[1.15fr_0.85fr]">
          <iframe
            src={contact.mapEmbedUrl}
            className="w-full h-[340px] lg:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${siteConfig.brand.name}`}
          ></iframe>

          <div className="flex flex-col justify-center p-6 bg-secondary-main md:p-8">
            <span className="flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-primary-main">
              <LocationOnIcon fontSize="small" />
              Cómo llegar
            </span>
            <h3 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
               {contact.address}
            </h3>
            <p className="mb-6 leading-relaxed text-primary">
              Tocá el botón para abrir la ubicación y coordinar tu visita con más facilidad.
            </p>

            <Button
              component="a"
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<OpenInNewIcon />}
              sx={{
                width: 'fit-content',
                color: 'white',
                borderColor: 'primary.main',
                bgcolor: 'primary.main',
                borderWidth: 2,
                '&:hover': { bgcolor: 'secondary.main', color: 'primary.main', borderColor: 'primary.main' }
              }}
            >
              {appointment.mapButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
