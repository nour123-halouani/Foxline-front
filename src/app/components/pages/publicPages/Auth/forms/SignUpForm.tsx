'use client';
import { Button, Checkbox, Input } from 'rizzui';
import { useTranslations } from '@/app/hooks/useTranslations';
import { Email } from '@/app/components/icons/Mail';
import { Password } from '@/app/components/icons/Password';
import { EyeOff } from '@/app/components/icons/EyeOff';
import { Eye } from '@/app/components/icons/Eye';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/app/utils/formsValidations';
import { z } from 'zod';
import Link from 'next/link';
import { GoogleIcon } from '@/app/components/icons/Google';
import { ColoredFacebook } from '@/app/components/icons/FacebookColored';
import { User } from '@/app/components/icons/User';
import PhoneNumberInput from '@/app/components/ui/PhoneInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/_redux/store';
import { signUp } from '@/_redux/actions/auth';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const t = useTranslations();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const toggleVisibility = () => setShowPassword((prev) => !prev);
    const toggleVisibilityConfirm = () => setShowPasswordConfirm((prev) => !prev);


    const SignUpSchema = signUpSchema(t);
    type SignUpFormValues = z.infer<typeof SignUpSchema>;
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignUpFormValues>({
        resolver: zodResolver(SignUpSchema),
    });

    const onSubmit = (data: SignUpFormValues) => {
        dispatch(signUp({
            formData: {
                email: data.email,
                password: data.password,
                name: data.fullName,
                phone: data.phone,
                role: "customer",
                isCompany: data.isCompany
            },
            t,
            navigate: router.push
        }))
    };

    const handleGoogleLogin = () => {
        window.open(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, '_blank', 'noopener,noreferrer');
    };

    const handleFacebookLogin = () => {
        window.open(`${process.env.NEXT_PUBLIC_API_URL}/auth/facebook`, '_blank', 'noopener,noreferrer');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 lg:px-4" autoComplete="off">
            <div className="flex flex-col gap-1 pb-3">
                <h1 className="text-xl font-bold">{t('getStartedNow')}</h1>
                <p className="text-xs text-typography-lighter">{t('getStartedNowDescription')}</p>
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
            <div className='flex lg:flex-row flex-col gap-3 lg:gap-2'>
                <Input
                    {...register('fullName')}
                    prefix={<User className="text-typography-lighter w-[15px] h-[15px]" />}
                    size="sm"
                    labelClassName="text-xs"
                    label={t('fullName')}
                    placeholder={t('fullName')}
                    className="text-typography lg:w-1/2"
                    error={errors.fullName?.message}
                />
                <PhoneNumberInput
                    control={control}
                    name="phone"
                    className="lg:w-1/2 w-full"
                    label={t('phone')}
                    error={errors.phone?.message}
                />
            </div>
            <div className='flex lg:flex-row flex-col gap-3 lg:gap-2'>
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
                    className="text-typography lg:w-1/2"
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
                    className="text-typography lg:w-1/2"
                    error={errors.confirmPassword?.message}
                />
            </div>
            <Checkbox
                {...register('isCompany')}
                label={t("isCompany")}
                size="sm"
                inputClassName="h-[15px] w-[15px]"
                iconClassName="h-[15px] w-[15px] text-white"
            />
            <Button
                type="submit"
                size="sm"
                className="w-full bg-gold text-bg-lighter py-2 px-4 rounded"
            >
                {t('signUp')}
            </Button>

            <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-typography-lighter" />
                <span className="text-typography text-sm">{t('or')}</span>
                <div className="flex-1 h-px bg-typography-lighter" />
            </div>

            <Button
                size="sm"
                variant="outline"
                className="relative border-gold text-gold w-full py-2"
                onClick={handleGoogleLogin}
            >
                <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 ltr:left-3 rtl:left-auto rtl:right-3"
                    dir="ltr"
                >
                    <GoogleIcon className="h-5 w-5" />
                </span>
                <span className="block text-center w-full" dir="auto">
                    {t('connectWithGoogle')}
                </span>
            </Button>

            <Button
                size="sm"
                variant="outline"
                className="relative border-gold text-gold w-full py-2"
                onClick={handleFacebookLogin}
            >
                <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 ltr:left-3 rtl:left-auto rtl:right-3"
                    dir="ltr"
                >
                    <ColoredFacebook className="h-5 w-5" />
                </span>
                <span className="block text-center w-full" dir="auto">
                    {t('connectWithFacebook')}
                </span>
            </Button>
            <div className="flex flex-row items-center justify-center gap-1 text-xs">
                <span className="text-typography ">{t('alreadyHaveAccount')}</span>
                <Link href="/sign-in" className='text-gold underline'>
                    {t('signIn')}
                </Link>
            </div>
        </form>
    );
}