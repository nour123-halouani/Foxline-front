'use client';
import { Button, Input } from 'rizzui';
import { useTranslations } from '@/app/hooks/useTranslations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUsSchema } from '@/app/utils/formsValidations';
import contactUsFleche from '../../../../../../public/home-media/contact-us-fleche.png';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/_redux/store';
import { useRouter } from 'next/navigation';
import PhoneNumberInput from '@/app/components/ui/PhoneInput';
import { Textarea } from "rizzui";
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

export default function ContactUsForm() {
    const t = useTranslations();
    const { lang } = useLanguage();
    const ContactUsSchema = contactUsSchema(t);
    type ContactUsFormValues = z.infer<typeof ContactUsSchema>;
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<ContactUsFormValues>({
        resolver: zodResolver(ContactUsSchema),
    });

    const onSubmit = (data: ContactUsFormValues) => {
        // dispatch(contactUs({
        //     forlgata: {
        //         email: data.email,
        //         password: data.password,
        //     },
        //     t,
        //     navigate: router.push
        // }))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:space-y-5 space-y-3 mt-4 sm:mt-0">
            <div className='flex sm:flex-row flex-col gap-3'>
                <Input
                    {...register('fullName')}
                    size="sm"
                    labelClassName="text-xs"
                    label={t('fullName')}
                    placeholder={t('fullName')}
                    className="sm:w-1/2 w-full"
                    error={errors.fullName?.message}
                />
                <PhoneNumberInput
                    control={control}
                    name="phone"
                    label={t('phone')}
                    className="sm:w-1/2 w-full"
                    error={errors.phone?.message}
                />
            </div>
            <div className='flex sm:flex-row flex-col gap-3'>
                <Input
                    {...register('email')}
                    size="sm"
                    labelClassName="text-xs"
                    label={t('email')}
                    placeholder={t('email')}
                    className="sm:w-1/2 w-full"
                    error={errors.email?.message}
                />
                <Input
                    {...register('subject')}
                    size="sm"
                    labelClassName="text-xs"
                    label={t('subject')}
                    placeholder={t('subject')}
                    className="sm:w-1/2 w-full"
                    error={errors.subject?.message}
                />
            </div>
            <Textarea
                {...register('message')}
                size="sm"
                labelClassName="text-xs"
                label={t('message')}
                placeholder={t('message')}
                error={errors.message?.message}
            />
            <div className="flex flex-col w-full gap-2 items-end">
                <Button
                    type="submit"
                    size="sm"
                    className="bg-gold text-bg-lighter py-2 px-4 rounded"
                >
                    {t('contactUs')}
                </Button>
                <Image
                    src={contactUsFleche}
                    alt="contact-us"
                    className={`h-[120px] w-[150px] ${lang === 'ar' ? '-scale-x-100' : ''}`}
                />
            </div>
        </form>
    );
}
