import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const { brand, contact, hero, navLinks } = siteConfig;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMobileOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 300, height: '100%', bgcolor: 'background.paper' }}>
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <a href="#" onClick={toggleDrawer(false)} className="flex items-center gap-3">
          <span className="flex items-center justify-center w-12 h-12 overflow-hidden bg-white rounded-full shadow-sm">
            <img src={brand.logo} alt={brand.name} className="object-cover w-full h-full mix-blend-multiply" />
          </span>
          <span className="text-xl font-black tracking-tight text-primary-main">
            {brand.name}
          </span>
        </a>
        <IconButton onClick={toggleDrawer(false)} aria-label="Cerrar menú">
          <CloseIcon />
        </IconButton>
      </div>

      <List sx={{ py: 2 }}>
        {(navLinks || []).map((link) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              onClick={toggleDrawer(false)}
              sx={{
                px: 3,
                py: 1.4,
                '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.08)', color: 'primary.main' }
              }}
            >
              <ListItemText primary={link.text} primaryTypographyProps={{ fontWeight: 700, fontSize: '1rem' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <div className="grid gap-3 p-5 mt-2">
        <Button
          component="a"
          href={hero.ctaLink}
          variant="contained"
          fullWidth
          startIcon={<CalendarMonthIcon />}
          onClick={toggleDrawer(false)}
          sx={{ py: 1.4 }}
        >
          {hero.ctaText}
        </Button>
        <Button
          component="a"
          href={`https://wa.me/${contact.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          fullWidth
          startIcon={<WhatsAppIcon />}
          sx={{ py: 1.2, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
        >
          WhatsApp
        </Button>
      </div>
    </Box>
  );

  return (
    <>
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? 'border-gray-100 bg-white/90 py-2 shadow-md backdrop-blur-md' : 'border-transparent bg-white py-4 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between px-5 mx-auto max-w-7xl">
          <a href="#" className="flex items-center gap-3 group" aria-label={`Ir al inicio de ${brand.name}`}>
            <span
              className={`flex items-center justify-center overflow-hidden bg-white rounded-full shadow-sm transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'w-14 h-14' : 'w-16 h-16 md:w-20 md:h-20'
              }`}
            >
              <img src={brand.logo} alt={brand.name} className="object-cover w-full h-full mix-blend-multiply" />
            </span>
            <span className="hidden text-xl font-black tracking-tight text-primary-main sm:block">
              {brand.name}
            </span>
          </a>

          <div className="items-center hidden gap-7 lg:flex">
            {(navLinks || []).map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="relative text-sm font-bold tracking-wide text-secondary-main transition-colors hover:text-primary-main"
              >
                {link.text}
                <span className="absolute left-0 w-0 h-0.5 transition-all -bottom-2 bg-primary-main hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="items-center hidden gap-3 md:flex">
            <Button
              component="a"
              href={`https://wa.me/${contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<WhatsAppIcon />}
              sx={{ borderWidth: 2, '&:hover': { borderWidth: 2 } }}
            >
              WhatsApp
            </Button>
          </div>

          <IconButton onClick={toggleDrawer(true)} sx={{ color: 'secondary.main', display: { md: 'none' } }} aria-label="Abrir menú">
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </div>
      </nav>

      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}
