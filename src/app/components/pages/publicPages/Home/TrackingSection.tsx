'use client';
import CustomCard from '@/app/components/ui/Cards';
import { useTranslations } from '@/app/hooks/useTranslations';
import { Button, Input } from 'rizzui';

export default function TrackingSection() {
    const t = useTranslations();

    return (
        <CustomCard className='sm:mb-24'>
            <div className='flex flex-col gap-3'>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold capitilize">
                    {t("trackYourOrder")}
                </h3>
                <p className="text-sm text-typography-dark">{t("trackYourOrderDescription")}</p>
            </div>
            <Input
                placeholder={t("enterYourTrackingNumber")}
            />
            <Button size="md" className="bg-gold text-white py-4 px-6">
                {t('trackNow')}
            </Button>
        </CustomCard >
    );
}