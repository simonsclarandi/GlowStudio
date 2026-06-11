import { useState } from 'react';
import { Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import { siteConfig } from '../config/siteConfig';

export default function Services() {
  const { services } = siteConfig;
  const [open, setOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleOpen = (treatment) => {
    setSelectedTreatment(treatment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedTreatment(null), 250);
  };

  return (
    <section id="servicios" className="py-24 bg-nude-base">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-4xl text-4xl font-extrabold tracking-tight text-secondary-main md:text-5xl">
              {services.title} <span className="text-primary-main">{services.titleHighlight}</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600">
            {services.description}
          </p>
        </div>

        {/* Grilla Simétrica de 3 Columnas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {services.items.map((item) => (
            <article
              key={item.title}
              onClick={() => item.extraInfo ? handleOpen(item) : null}
              className="group relative flex aspect-[3/4] min-h-[200px] w-[85%] mx-auto overflow-hidden rounded-xl bg-nude-light cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 object-cover w-full h-full opacity-65 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="relative z-10 flex flex-col justify-end w-full p-7">
                <h3 className="mb-2 text-2xl font-black text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm font-bold uppercase text-surface tracking-wider">
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-secondary-main line-clamp-3">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}