// 'use client';
// import { useTranslations } from '@/app/hooks/useTranslations';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import Link from 'next/link';

// export default function HeroSection() {
//     const t = useTranslations();

//     return (
//         <section dir="ltr" className="flex flex-col-reverse md:flex-row items-center justify-center h-screen sm:max-h-[600px] pt-12">
//             <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
//                 <h1 className="text-3xl sm:text-4xl font-semibold leading-snug text-gray-900">
//                     <span className="text-black">Quick & Reliable </span>
//                     <span className="text-gold">Cross-Border Shipping That Works.</span>
//                 </h1>
//                 <p className="text-gray-600 max-w-md mx-auto md:mx-0">
//                     'Our expert team and smart logistics platform ensure every shipment arrives safely, on time, and across the world — from Libya to Germany and beyond.'
//                 </p>
//                 <Link
//                     href="/contact"
//                     className="inline-block px-6 py-3 bg-[#B2802B] text-white rounded-md hover:bg-[#a06f1e] transition"
//                 >
//                     {t('contactUs')}
//                 </Link>
//             </div>

//             <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
//                 <div className="w-[520px] h-[520px]">
//                     <DotLottieReact
//                         src="https://lottie.host/f830a3b3-80d4-495e-8c10-079fff5598dc/tttVpb7USX.lottie"
//                         loop
//                         autoplay
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }

'use client';
import { useTranslations } from '@/app/hooks/useTranslations';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from 'rizzui';

export default function HeroSection() {
    const t = useTranslations();

    return (
        <section
            className="flex flex-col-reverse md:flex-row items-center justify-center h-screen sm:max-h-[600px] pt-12"
        >
            <motion.div
                initial={{ x: -110, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-full md:w-1/2 space-y-6"
            >
                <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                    <span className="text-black">{t("heroSectionTitle1")} </span>
                    <span className="text-gold font-bold"> {t("heroSectionTitle2")}</span>
                </h1>
                <p className="text-typography text-sm">
                    {t("heroSectionDescription")}
                </p>
                <Link href="/contact" className="inline-block transition">
                    <Button size="md" className="bg-gold text-white p-4">
                        {t('contactUs')}
                    </Button>
                </Link>
            </motion.div>

            <div className="w-full md:w-1/2 flex justify-center">
                <div className="md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px] h-[350px] sm:w-[350px]">
                    <DotLottieReact
                        src="https://lottie.host/f830a3b3-80d4-495e-8c10-079fff5598dc/tttVpb7USX.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </section>
    );
}
