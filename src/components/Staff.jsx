import { Avatar, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { siteConfig } from '../config/siteConfig';

export default function Staff() {
  const { staff, hero } = siteConfig;

  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="block mb-3 text-sm font-bold tracking-widest uppercase text-primary-main">
              {staff.tagline}
            </span>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-secondary-main md:text-5xl">
              {staff.title} <span className="text-primary-main">{staff.titleHighlight}</span>
            </h2>
          </div>

          <Button
            component="a"
            href={hero.ctaLink}
            variant="contained"
            startIcon={<CalendarMonthIcon />}
            sx={{ width: 'fit-content', px: 4, py: 1.3, bgcolor: 'secondary.main', color: 'white', '&:hover': { bgcolor: 'primary.main', color: 'secondary.main' } }}
          >
            {hero.ctaText}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {staff.team.map((member) => (
            <article
              key={member.name}
              className={`group overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-main hover:shadow-xl ${
                member.isLeader ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <div className="flex flex-col items-center p-7 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 transition-transform duration-300 border-2 rounded-full border-primary-main scale-105 group-hover:scale-110"></div>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: member.isLeader ? 220 : 190,
                      height: member.isLeader ? 220 : 190,
                      border: '4px solid white',
                      boxShadow: '0 12px 22px -8px rgb(0 0 0 / 0.22)',
                      '& .MuiAvatar-img': {
                        objectPosition: member.imagePosition || 'center',
                        transform: `scale(${member.imageScale || '1'})`
                      }
                    }}
                  />
                </div>

                <h3 className="mb-1 text-2xl font-extrabold text-secondary-main">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-black tracking-widest uppercase text-primary-main">
                  {member.specialty}
                </p>
                <p className="max-w-md text-sm italic leading-relaxed text-gray-600">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
