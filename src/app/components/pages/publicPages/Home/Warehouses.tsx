// 'use client';
// import Title from '@/app/components/ui/Title';
// import { useTranslations } from '@/app/hooks/useTranslations';
// import warehouses from "../../../../../../public/warehouses-maps.png"
// import Image from 'next/image';


// export default function Wrehouses() {
//     const t = useTranslations();

//     return (
//         <div className="pt-12 bg-bg-dark">
//             <Title title={t('warehouses')} className="justify-center text-center text-lg sm:text-xl" />
//             <Image src={warehouses} alt="warehouses" className='container py-12' />
//         </div>
//     );
// }

'use client';
import Image from 'next/image';
import { useState } from 'react';
import Title from '@/app/components/ui/Title';
import { useTranslations } from '@/app/hooks/useTranslations';
import warehousesDefault from "../../../../../../public/warehouses-default.png"
import warehouses from "../../../../../../public/warehouses-maps.png"

export default function Warehouses() {
    const t = useTranslations();
    const [hover, setHover] = useState(false);

    return (
        <div className="pt-12 bg-bg-dark">
            <Title title={t('warehouses')} className="justify-center text-center text-lg sm:text-xl" />
            <div
                className="container py-12 relative w-full max-w-7xl mx-auto"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Image
                    src={hover ? warehouses : warehousesDefault}
                    alt="Warehouses Map"
                    width={1200}
                    height={600}
                    className="w-full h-auto transition-opacity duration-300"
                />
            </div>
        </div>
    );
}
