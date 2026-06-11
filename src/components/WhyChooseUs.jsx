import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { siteConfig } from '../config/siteConfig';

export default function WhyChooseUs() {
  const { whyChooseUs, hero } = siteConfig;

  return (
    <section id="experiencia" className="py-24 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 mb-14 md:flex-row md:items-end md:justify-between">
          <div>
                        <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-secondary-main md:text-4xl">
              {whyChooseUs.title} <span className="text-primary-main">{whyChooseUs.titleHighlight}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {whyChooseUs.items.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <article
                key={item.title}
                className="relative p-6 overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm group hover:-translate-y-1 hover:border-primary-main hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 origin-left scale-x-0 bg-primary-main group-hover:scale-x-100"></div>
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${item.usePrimaryColor ? 'bg-primary-main/15 text-primary-main' : 'bg-secondary-main text-white'}`}>
                    <IconComponent sx={{ fontSize: 40 }} />
                  </div>
                  <h3 className="mt-2 mb-2 text-xl font-extrabold text-primary-main">
                    {item.title}
                  </h3>
                </div>

                <p className="leading-relaxed text-gray-600 mt-4">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
