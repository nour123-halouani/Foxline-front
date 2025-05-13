'use client';
import operation1 from '../../../../../../public/operation-1.png';
import operation2 from '../../../../../../public/operation-2.png';
import operation3 from '../../../../../../public/operation-3.png';
import fleche1 from '../../../../../../public/fleche-1.png';
import fleche2 from '../../../../../../public/fleche-2.png';
import { useTranslations } from '@/app/hooks/useTranslations';
import Title from '@/app/components/ui/Title';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

export default function OperationMode() {
    const t = useTranslations();
    const { lang } = useLanguage();

    return (
        <div className="container mx-auto px-2 py-8 space-y-12 sm:space-y-16 relative">
            <Title title={t('operationMode')} className="justify-center text-center text-lg sm:text-xl" />
            <div className='flex flex-col sm:gap-1 gap-8'>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-8">
                    <div className="md:w-1/2 flex flex-col gap-3">
                        <h3 className="text-base sm:text-xl font-extrabold text-gold flex items-center gap-2 justify-center text-center md:justify-start md:text-left">
                            <span className="w-8 h-8 flex items-center justify-center bg-typography text-bg-lighter rounded-full">
                                1
                            </span>
                            {t("connect")}
                        </h3>
                        <p className="text-sm sm:text-base text-typography-dark md:w-[60%]">
                            {t("connectDescription")}
                        </p>
                    </div>
                    <Image
                        src={operation1}
                        alt="Plane"
                        className="w-48 h-48 sm:w-56 sm:h-56"
                    />
                </div>
                {lang === "ar" ?
                    <div className="hidden md:flex justify-center items-center">
                        <Image src={fleche1} alt="line1" className="h-28" />
                    </div>
                    :
                    <div className="hidden md:flex justify-center items-center">
                        <Image src={fleche2} alt="line2" className="h-28" />
                    </div>
                }
                <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 sm:gap-8">
                    <div className="md:w-1/2 flex flex-col gap-3">
                        <h3 className="text-base sm:text-xl font-extrabold text-gold flex items-center gap-2 justify-center text-center md:justify-start md:text-left">
                            <span className="w-8 h-8 flex items-center justify-center bg-typography text-bg-lighter rounded-full">
                                2
                            </span>
                            {t("store")}
                        </h3>
                        <p className="text-sm sm:text-base text-typography-dark md:w-[60%]">
                            {t("storeDescription")}
                        </p>
                    </div>
                    <Image
                        src={operation2}
                        alt="Containers"
                        className="w-48 h-48 sm:w-56 sm:h-56"
                    />
                </div>
                {lang === "ar" ?
                    <div className="hidden md:flex justify-center items-center">
                        <Image src={fleche2} alt="line2" className="h-28" />
                    </div>
                    :
                    <div className="hidden md:flex justify-center items-center">
                        <Image src={fleche1} alt="line1" className="h-28" />
                    </div>
                }
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-8">
                    <div className="md:w-1/2 flex flex-col gap-3">
                        <h3 className="text-base sm:text-xl font-extrabold text-gold flex items-center gap-2 justify-center text-center md:justify-start md:text-left">
                            <span className="sm:w-8 sm:h-8 w-7 h-7 flex items-center justify-center bg-typography text-bg-lighter rounded-full">
                                3
                            </span>
                            {t("shipping")}
                        </h3>
                        <p className="text-sm sm:text-base text-typography-dark md:w-[60%]">
                            {t("shippingDescription")}
                        </p>
                    </div>
                    <Image
                        src={operation3}
                        alt="shipping"
                        className="w-48 h-48 sm:w-56 sm:h-56"
                    />
                </div>
            </div>
        </div>
    );
}
