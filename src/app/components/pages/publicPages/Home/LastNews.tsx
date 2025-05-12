// 'use client';
// import Image from 'next/image';
// import Title from '@/app/components/ui/Title';
// import { useTranslations } from '@/app/hooks/useTranslations';
// import new1 from '../../../../../../public/new1.jpg';
// import new2 from '../../../../../../public/new2.jpg';
// import new3 from '../../../../../../public/new3.jpg';

// export default function LastNews() {
//     const t = useTranslations();
//     const images = [new1, new2, new3];

//     return (
//         <div className="py-12 bg-bg-dark lg:mb-24 md:mb-5">
//             <div className="container flex flex-col gap-12">
//                 <Title title={t('latestNews')} className="justify-center" />
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-5">
//                     {images.map((img, index) => (
//                         <div
//                             key={index}
//                             className="relative w-full aspect-square bg-bg-lighter shadow-custom backdrop-blur-sm rounded-lg overflow-hidden"
//                         >
//                             <Image
//                                 src={img}
//                                 alt={`News ${index + 1}`}
//                                 fill
//                                 className="object-contain"
//                                 placeholder="blur"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client';
import Image from 'next/image';
import Title from '@/app/components/ui/Title';
import { useTranslations } from '@/app/hooks/useTranslations';
import new1 from '../../../../../../public/new1.jpg';
import new2 from '../../../../../../public/new2.jpg';
import new3 from '../../../../../../public/new3.jpg';

export default function LastNews() {
    const t = useTranslations();
    const images = [new1, new2, new3];

    return (
        <div className="py-12 bg-bg-dark lg:mb-24 md:mb-5">
            <div className="container flex flex-col gap-12">
                <Title title={t('latestNews')} className="justify-center" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-5">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative aspect-square w-full max-w-[300px] sm:max-w-full mx-auto bg-bg-lighter shadow-custom backdrop-blur-sm rounded-lg overflow-hidden"
                        >
                            <Image
                                src={img}
                                alt={`News ${index + 1}`}
                                fill
                                className="object-contain"
                                placeholder="blur"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
