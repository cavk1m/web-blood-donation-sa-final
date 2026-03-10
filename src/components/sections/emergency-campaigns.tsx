'use client';

import React from 'react';
import { AlertTriangle, Droplets, HandHeart, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const badgeStyles = {
  urgent: 'bg-red-600 text-white',
  food: 'bg-orange-500 text-white',
  medical: 'bg-emerald-600 text-white',
};

export const EmergencyCampaigns: React.FC = () => {
  const { t } = useLanguage();

  const campaigns = [
    {
      icon: Droplets,
      image:
        'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80',
      title: t('emergency.cards.blood.title'),
      subtitle: t('emergency.cards.blood.subtitle'),
      current: t('emergency.cards.blood.current'),
      goal: t('emergency.cards.blood.goal'),
      progress: 62,
      tag: t('emergency.tags.urgent'),
      tagStyle: badgeStyles.urgent,
      primary: t('emergency.cards.blood.primary'),
      secondary: t('emergency.cards.blood.secondary'),
    },
    {
      icon: HandHeart,
      image:
        'https://images.unsplash.com/photo-1469571486292-b53601020e7e?auto=format&fit=crop&w=1200&q=80',
      title: t('emergency.cards.food.title'),
      subtitle: t('emergency.cards.food.subtitle'),
      current: t('emergency.cards.food.current'),
      goal: t('emergency.cards.food.goal'),
      progress: 36,
      tag: t('emergency.tags.food'),
      tagStyle: badgeStyles.food,
      primary: t('emergency.cards.food.primary'),
      secondary: t('emergency.cards.food.secondary'),
    },
    {
      icon: Stethoscope,
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      title: t('emergency.cards.medical.title'),
      subtitle: t('emergency.cards.medical.subtitle'),
      current: t('emergency.cards.medical.current'),
      goal: t('emergency.cards.medical.goal'),
      progress: 54,
      tag: t('emergency.tags.medical'),
      tagStyle: badgeStyles.medical,
      primary: t('emergency.cards.medical.primary'),
      secondary: t('emergency.cards.medical.secondary'),
    },
  ];

  return (
    <section className="pt-0 pb-14">
      <div className="w-full bg-red-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{t('emergency.alert.title')}</p>
              <p className="text-xs text-red-100 truncate">{t('emergency.alert.description')}</p>
            </div>
          </div>
          <Button className="bg-white text-red-700 hover:bg-red-50 rounded-full px-4 py-2 h-auto font-semibold text-xs sm:text-sm">
            {t('emergency.alert.button')}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-6 sm:pt-8">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-red-600 tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              {t('emergency.active')}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('emergency.heading')}</h2>
            <p className="text-sm text-gray-500 max-w-xl">{t('emergency.subheading')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {campaigns.map((campaign) => {
              const Icon = campaign.icon;

              return (
                <article
                  key={campaign.title}
                  className="relative rounded-[28px] overflow-hidden h-[520px] shadow-lg border border-black/5"
                  style={{
                    backgroundImage: `url('${campaign.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                  <div className="relative h-full p-4 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase ${campaign.tagStyle}`}
                      >
                        {campaign.tag}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-white">
                      <h3 className="text-2xl font-bold leading-tight">{campaign.title}</h3>
                      <p className="text-sm text-white/85 mt-2">{campaign.subtitle}</p>

                      <div className="mt-4 mb-2 h-px bg-white/30" />

                      <div className="flex items-center justify-between text-xs text-white/90 mb-2">
                        <span>{campaign.current}</span>
                        <span>{campaign.goal}</span>
                      </div>
                      <div className="h-2.5 bg-white/30 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${campaign.progress}%` }} />
                      </div>

                      <div className="flex items-center gap-2">
                        <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white px-4 text-xs">
                          {campaign.primary}
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 px-4 text-xs"
                        >
                          {campaign.secondary}
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
