import { useState } from 'react';
import { Button, Dialog, DialogContent, IconButton, SvgIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { siteConfig } from '../config/siteConfig';

export default function ProblemSection() {
  const [open, setOpen] = useState(false);
  const { problemSection, hero } = siteConfig;

  return (
    <section className="py-24 bg-primary-main">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-secondary-main">
              <SvgIcon fontSize="small">
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              </SvgIcon>
              {problemSection?.subtitle || ''}
            </span>

            <h2 className="max-w-xl mb-6 text-5xl font-extrabold tracking-tight text-white md:text-4xl ">
              {problemSection?.title?.toUpperCase() || ''}
            </h2>
{problemSection.solution?.videoUrl && (
            <DialogContent sx={{ p: 0, display: 'flex', justifyContent: 'center', backgroundColor: 'primary.main' }}>
              <iframe
                src={problemSection.solution.videoUrl}
                className="w-[450px] h-[400px] rounded-lg bg-white md:h-[600px]"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                title="Video de Instagram"
              />
            </DialogContent>
          )}
          </div>

          <div className="grid gap-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {problemSection.quotes.map((quote) => (
                <div key={quote} className="relative min-h-44 p-6 overflow-hidden border rounded-lg border-white/10 bg-white/[0.06]">
                  <FormatQuoteIcon sx={{ color: 'white', fontSize: 42, opacity: 0.35 }} />
                  <p className="mt-5 text-lg font-bold leading-snug text-white">"{quote}"</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white border border-white rounded-lg shadow-2xl md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                
                <div>
                  <h3 className="mb-2 text-3xl font-extrabold text-secondary-main justify-center items-center flex gap-2">
                    {problemSection.solution.headline}
                  </h3>
                  <p className="mb-4 text-lg font-bold text-accent justify-center items-center flex gap-2">
                    {problemSection.solution.highlight}
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    {problemSection.solution.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-8 sm:flex-row">
                  <Button
                    component="a"
                    href={hero.ctaLink}
                    variant="outlined"
                    startIcon={<CalendarMonthIcon />}
                    size="large"
                    sx={{ px: 4, py: 1.5, color: 'secondary.main', borderWidth: 2, bgcolor: 'primary.main', fontWeight: 'bold' ,'&:hover': { color: 'primary.main', borderWidth: 2, bgcolor: 'secondary.light' } }}
                  >
                    {hero.ctaText}
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: '16px', overflow: 'hidden', bgcolor: 'transparent', boxShadow: 'none' } }}
      >
        <div className="relative">
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Cerrar video"
            sx={{ position: 'absolute', right: 0, top: -44, color: '#fff', bgcolor: 'rgba(0,0,0,0.55)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}
          >
            <CloseIcon />
          </IconButton>

        </div>
      </Dialog>
    </section>
  );
}
