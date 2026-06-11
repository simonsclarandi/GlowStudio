import { useState } from 'react';
import { Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import { siteConfig } from '../config/siteConfig';

export default function Philosophy() {
  const [open, setOpen] = useState(false);
  const { philosophy } = siteConfig;

  return (
    <section id="filosofia" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-primary-main">
              <AutoAwesomeIcon fontSize="small" />
              {philosophy.tagline}
            </span>

            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-secondary-main md:text-5xl">
              {philosophy.title}
              <br />
              <span className="text-primary-main">{philosophy.titleHighlight}</span>
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              {philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            <Button
              onClick={() => setOpen(true)}
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 8, px: 4, py: 1.4, borderWidth: 2, '&:hover': { borderWidth: 2, bgcolor: 'primary.main', color: 'secondary.main' } }}
            >
              {philosophy.buttonText}
            </Button>
          </div>

          <div className="relative p-7 overflow-hidden border border-gray-100 shadow-xl bg-gray-50 rounded-lg md:p-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-main"></div>
            <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: 54, opacity: 0.45, mb: 2 }} />
            <Typography variant="h5" component="blockquote" sx={{ fontWeight: 800, color: 'secondary.main', lineHeight: 1.45 }}>
              "{philosophy.quote.text}"
            </Typography>
            <p className="mt-6 text-xl font-extrabold text-primary-main">
              {philosophy.quote.highlight}
            </p>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: '16px', overflow: 'hidden' } }}
      >
        <div className="relative bg-white">
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Cerrar explicación"
            sx={{ position: 'absolute', right: 10, top: 10, color: '#6b7280', zIndex: 10, bgcolor: 'rgba(255,255,255,0.85)', '&:hover': { color: 'secondary.main', bgcolor: 'white' } }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent sx={{ p: 0 }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center p-7 md:p-9">
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1.5 }}>
                  {philosophy.modal.tagline}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: 'secondary.main', mt: 1, mb: 2, lineHeight: 1.1 }}>
                  {philosophy.modal.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {philosophy.modal.description}
                </Typography>

                <Button
                  component="a"
                  href={philosophy.modal.buttonLink}
                  onClick={() => setOpen(false)}
                  variant="contained"
                  sx={{ width: 'fit-content', bgcolor: 'secondary.main', color: 'white', '&:hover': { bgcolor: 'primary.main', color: 'secondary.main' } }}
                >
                  {philosophy.modal.buttonText}
                </Button>
              </div>

              <div className="flex items-center justify-center p-4 bg-gray-100 min-h-[420px]">
                <iframe
                  src={philosophy.modal.videoUrl}
                  className="w-full h-[520px] rounded-lg border border-gray-200 bg-white shadow-sm md:h-[620px]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title={philosophy.modal.title}
                ></iframe>
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </section>
  );
}
