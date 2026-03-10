'use client';

import React from 'react';
import { ClipboardList, Ticket, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const SimpleProcess: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: t('simpleProcess.steps.step1.title'),
      description: t('simpleProcess.steps.step1.description'),
    },
    {
      number: '02',
      icon: Ticket,
      title: t('simpleProcess.steps.step2.title'),
      description: t('simpleProcess.steps.step2.description'),
    },
    {
      number: '03',
      icon: MapPin,
      title: t('simpleProcess.steps.step3.title'),
      description: t('simpleProcess.steps.step3.description'),
    },
    {
      number: '04',
      icon: Heart,
      title: t('simpleProcess.steps.step4.title'),
      description: t('simpleProcess.steps.step4.description'),
    },
  ];

  return (
    <section className="bg-[#f5f4f2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full bg-red-50 text-red-600 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide mb-5">
          ✦ {t('simpleProcess.badge')}
        </div>

        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {t('simpleProcess.title')}
        </h2>
        <p className="text-3xl text-gray-500 max-w-3xl leading-relaxed mb-10">
          {t('simpleProcess.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-3xl border border-[#ede6e6] bg-white p-7 shadow-[0_10px_20px_rgba(130,42,42,0.06)] min-h-[330px]"
              >
                <div className="text-[64px] font-bold leading-none text-pink-100 mb-5">
                  {step.number}
                </div>

                <div className="w-12 h-12 rounded-xl bg-pink-50 text-red-500 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-3 leading-snug">{step.title}</h3>
                <p className="text-2xl text-gray-500 leading-relaxed">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
