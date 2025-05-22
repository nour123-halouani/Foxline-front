'use client';
import { Button, Input } from 'rizzui';
import { useTranslations } from '@/app/hooks/useTranslations';
import { Email } from '@/app/components/icons/Mail';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '@/app/utils/formsValidations';
import { z } from 'zod';
import { Password } from '@/app/components/icons/Password';

export default function ForgotPasswordForm() {
    const t = useTranslations();

    const ForgotPasswordSchema = forgotPasswordSchema(t);
    type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(ForgotPasswordSchema),
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        console.log('submitted');
        console.log('Form submitted:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 lg:px-4">
            <div className="w-8 h-8 rounded-full shadow-custom flex items-center justify-center">
                <Password className="text-gold" />
            </div>
            <div className="flex flex-col gap-1 pb-3">
                <h1 className="text-xl font-bold">{t('forgotPassword')}</h1>
                <p className="text-xs text-typography-lighter">{t('forgotPasswordDescription')}</p>
            </div>
            <Input
                {...register('email')}
                prefix={<Email className="text-typography-lighter w-[15px] h-[15px]" />}
                size="sm"
                labelClassName="text-xs"
                label={t('email')}
                placeholder={t('email')}
                className="text-typography"
                error={errors.email?.message}
            />
            <Button
                type="submit"
                size="sm"
                className="w-full bg-gold text-bg-lighter py-2 px-4 rounded"
            >
                {t('submit')}
            </Button>
        </form>
    );
}