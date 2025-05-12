'use client';

import Title from '@/app/components/ui/Title';
import { times } from '@/app/constants/shipmentsClosingTimes';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function ClosingTimes() {
    const t = useTranslations();

    const getDaysLeft = (shipmentDate: string): number => {
        const shipmentDateObj = new Date(shipmentDate);
        const currentDate = new Date();
        const timeDiff = shipmentDateObj.getTime() - currentDate.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };

    return (
        <div className="container flex flex-col gap-12 lg:mb-24 md:mb-5">
            <Title title={t("shippmentsClosingTimesTitle")} className="justify-center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {times.shipments.map((shipment, index) => {
                    const daysLeft = getDaysLeft(shipment.date);
                    return (
                        <div
                            key={index}
                            className="w-full max-w-full bg-bg-lighter shadow-custom backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg text-center space-y-4"
                        >
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gold uppercase">
                                {shipment.location}, shipment {shipment.code}
                            </h3>
                            <p className="text-sm text-typography-lighter">{t("readyToLaunchIn")}</p>
                            <p className="text-xl md:text-2xl lg:text-3xl font-normal">{shipment.date}</p>
                            <p className="text-sm text-typography-dark">{daysLeft} {t("daysLeft")}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
