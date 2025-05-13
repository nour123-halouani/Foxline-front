'use client';
import CustomCard from '@/app/components/ui/Cards';
import MySelect from '@/app/components/ui/MySelect';
import { useTranslations } from '@/app/hooks/useTranslations';
import { useState } from 'react';
import { Button, Input, Select } from 'rizzui';

export default function ShippingPrices() {
    const t = useTranslations();
    const options = [
        { label: 'BERLIN', value: 'BERLIN' },
        { label: 'BELGIEN', value: 'BELGIEN' },
        { label: 'PARIS', value: 'PARIS' },
    ];
    const [value, setValue] = useState(null);

    return (
        <div className='container lg:mb-24 md:mb-5'>
            <CustomCard>
                <div className='flex flex-col gap-3'>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold capitilize">
                        {t("shippingPrices")}
                    </h3>
                    <p className="text-sm text-typography-dark">{t("shippingPricesDescription")}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Input
                        placeholder={t("length")}
                        type='number'
                    />
                    <Input
                        placeholder={t("weight")}
                        type='number'
                    />
                    <MySelect
                        options={options}
                        // value={value}
                        placeholder={t("line")}
                    // onChange={(val) => setValue(val)}
                    />
                    <Input
                        placeholder={t("height")}
                        type='number'
                        min={0}
                    />
                    <Input
                        placeholder={t("width")}
                        type='number'
                    />
                    <MySelect
                        options={options}
                        // value={value}
                        placeholder={t("warehouse")}
                    // onChange={(val) => setValue(val)}
                    />
                </div>
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