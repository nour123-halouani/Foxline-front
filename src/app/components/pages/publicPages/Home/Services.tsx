'use client';
import Title from '@/app/components/ui/Title';
import { useServicesList } from '@/app/constants/services';
import { useTranslations } from '@/app/hooks/useTranslations';
import { IconReader } from '@/app/utils/iconReader';

export default function Services() {
    const t = useTranslations();
    const servicesData = useServicesList();

    return (
        <div className="py-12 bg-bg-dark lg:mb-24 md:mb-5">
            <div className="container flex flex-col gap-12">
                <Title title={t('servicesWeOffer')} className="justify-center" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-5">
                    {servicesData.map((service, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className="flex items-center justify-center bg-bg-lighter w-12 h-12 rounded-full shadow-custom">
                                <IconReader name={service.icon} className="text-gold-dark w-6 h-6" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gold">{service.title}</h3>
                            <p className="text-sm text-typography-dark">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
