'use client';
import { Button, Input } from 'rizzui';
import { useTranslations } from '@/app/hooks/useTranslations';
import { Email } from '@/app/components/icons/Mail';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '@/app/utils/formsValidations';
import { z } from 'zod';
import { Password } from '@/app/components/icons/Password';
import { useState } from 'react';
import { EyeOff } from '@/app/components/icons/EyeOff';
import { Eye } from '@/app/components/icons/Eye';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/_redux/store';
import { useRouter } from 'next/navigation';
import { resetPassword } from '@/_redux/actions/auth';

export default function ResetPasswordForm({ email }: { email: string }) {
    const t = useTranslations();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const toggleVisibility = () => setShowPassword((prev) => !prev);
    const toggleVisibilityConfirm = () => setShowPasswordConfirm((prev) => !prev);

    const ResetPasswordSchema = resetPasswordSchema(t);
    type ResetPasswordFormValues = z.infer<typeof ResetPasswordSchema>;
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(ResetPasswordSchema),
    });

    const onSubmit = (data: ResetPasswordFormValues) => {
        dispatch(resetPassword({
            formData: {
                email: email,
                newPassword: data.password,
            },
            t,
            navigate: router.push
        }))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 lg:px-4">
            <div className="flex flex-col gap-1 pb-3">
                <h1 className="text-xl font-bold">{t('resetPassword')}</h1>
                <p className="text-xs text-typography-lighter">{t('resetPasswordDescription')}</p>
            </div>
            <Input
                {...register('password')}
                prefix={<Password className="text-typography-lighter w-[15px] h-[15px]" />}
                suffix={
                    <div onClick={toggleVisibility} className="cursor-pointer">
                        {showPassword ? (
                            <EyeOff className="text-typography-lighter w-[18px] h-[18px]" />
                        ) : (
                            <Eye className="text-typography-lighter w-[18px] h-[18px]" />
                        )}
                    </div>
                }
                type={showPassword ? 'text' as any : 'password'}
                size="sm"
                labelClassName="text-xs"
                label={t('password')}
                placeholder={t('password')}
                className="text-typography"
                error={errors.password?.message}
            />
            <Input
                {...register('confirmPassword')}
                prefix={<Password className="text-typography-lighter w-[15px] h-[15px]" />}
                suffix={
                    <div onClick={toggleVisibilityConfirm} className="cursor-pointer">
                        {showPasswordConfirm ? (
                            <EyeOff className="text-typography-lighter w-[18px] h-[18px]" />
                        ) : (
                            <Eye className="text-typography-lighter w-[18px] h-[18px]" />
                        )}
                    </div>
                }
                type={showPasswordConfirm ? 'text' as any : 'password'}
                size="sm"
                labelClassName="text-xs"
                label={t('confirmPassword')}
                placeholder={t('confirmPassword')}
                className="text-typography"
                error={errors.confirmPassword?.message}
            />

            <Button
                type="submit"
                size="sm"
                className="w-full bg-gold text-bg-lighter py-2 px-4 rounded"
            >
                {t('submit')}
            </Button>
            <div className="flex flex-row items-center justify-center gap-1 text-xs">
                <span className="text-typography ">{t('rememberPassword')}</span>
                <Link href="/sign-in" className='text-gold underline'>
                    {t('signIn')}
                </Link>
            </div>

        </form>
    );
}