import { Button, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { siteConfig } from '../config/siteConfig';

export default function ContactFooter() {
  const { brand, contact, footer, navLinks, services, hero } = siteConfig;
  const featuredTreatments = (footer.treatments && footer.treatments.length)
    ? footer.treatments
    : services.items.slice(0, 4).map((service) => service.title);

  return (
    <footer className="bg-primary-main text-white">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-4 group" aria-label={`Ir al inicio de ${brand.name}`}>
              <span className="flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-cover w-full h-full mix-blend-multiply"
                />
              </span>
              <span className="text-2xl font-black tracking-tight">
                {brand.name}
                <span className="text-primary-main">{brand.highlightName}</span>
              </span>
            </a>

            <p className="max-w-sm mt-6 leading-relaxed text-gray-300">
              {footer.description}
            </p>

            <div className="flex gap-3 mt-6">
              <IconButton
                component="a"
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.16)', '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'white  '} }}
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold tracking-widest uppercase text-secondary-main">
              {footer.sections.navigationTitle}
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.text} href={link.href} className="text-gray-300 transition-colors hover:text-secondary-main">
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold tracking-widest uppercase text-secondary-main">
              {footer.sections.treatmentsTitle}
            </h3>
            <ul className="space-y-3">
              {featuredTreatments.map((treatment) => (
                <li key={treatment} className="text-gray-300">
                  {treatment}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold tracking-widest uppercase text-secondary-main">
              {footer.sections.contactTitle}
            </h3>

            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300">
                <PhoneIphoneIcon className="shrink-0 text-white" fontSize="small" />
                <a href={`https://wa.me/${contact.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary-main">
                  {contact.phoneDisplay}
                </a>
              </li>
             {/*<li className="flex gap-3 text-gray-300">
                <EmailIcon className="shrink-0 text-white" fontSize="small" />
                <a href={`mailto:${contact.email}`} className="break-all hover:text-primary-main">
                  {contact.email}
                </a>
              </li>
               */} 
              <li className="flex gap-3 text-gray-300">
                <LocationOnIcon className="shrink-0 text-white" fontSize="small" />
                <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-main">
                  {contact.address}
                </a>
              </li>
            </ul>

            <Button
              component="a"
              href={`https://wa.me/${contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<WhatsAppIcon />}
              sx={{ mt: 6, py: 1.3, px: 3, bgcolor: 'white', color: 'secondary.main', '&:hover': { color: 'white', bgcolor: 'secondary.main', } }}
            >
              {hero.ctaText}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 mt-12 border-t border-white/10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">{footer.copy}</p>

          <div className="flex flex-wrap gap-4 text-sm">
            {footer.links.map((link) => (
              <a key={link.text} href={link.href} className="inline-flex items-center gap-1 text-gray-400 transition-colors hover:text-primary-main">
                {link.text}
                <OpenInNewIcon sx={{ fontSize: 14 }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
