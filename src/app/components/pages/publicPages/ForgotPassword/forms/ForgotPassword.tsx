'use client';
import { Button, Input } from 'rizzui';
import { useTranslations } from '@/app/hooks/useTranslations';
import { Email } from '@/app/components/icons/Mail';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '@/app/utils/formsValidations';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/_redux/store';
import { useRouter } from 'next/navigation';
import { sendResetCode } from '@/_redux/actions/auth';

export default function ForgotPasswordForm() {
    const t = useTranslations();

    const ForgotPasswordSchema = forgotPasswordSchema(t);
    type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(ForgotPasswordSchema),
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        dispatch(sendResetCode({
            formData: {
                email: data.email,
            },
            t,
            navigate: router.push
        }))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 lg:px-4">
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