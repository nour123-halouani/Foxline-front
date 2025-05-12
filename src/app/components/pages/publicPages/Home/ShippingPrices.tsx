'use client';
import CustomCard from '@/app/components/ui/Cards';
import { useTranslations } from '@/app/hooks/useTranslations';
import { Button, Input, Select } from 'rizzui';

export default function ShippingPrices() {
    const t = useTranslations();
    const options = [
        { label: 'BERLIN', value: 'BERLIN' },
        { label: 'BELGIEN', value: 'BELGIEN' },
        { label: 'PARIS', value: 'PARIS' },
    ];
    return (
        <div className='container lg:mb-24 md:mb-5'>
            <CustomCard>
                <div className='flex flex-col gap-3'>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold capitilize">
                        {t("shippingPrices")}
                    </h3>
                    <p className="text-sm text-typography-dark">{t("shippingPricesDescription")}</p>
                </div>
                <Input
                    placeholder={t("enterYourTrackingNumber")}
                />
                <Select
                    placeholder={t("enterYourTrackingNumber")}
                    options={options}
                />

                <Button size="md" className="bg-gold text-white py-4 px-6">
                    {t('checkPrice')}
                </Button>
                <h3 className="text-base md:text-lg lg:text-3xl font-semibold capitilize">
                    £ 0
                </h3>

            </CustomCard >
        </div>
    );
}