'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useEffect, useState } from 'react';
import { Button } from 'rizzui';
import { useTranslations } from '@/app/hooks/useTranslations';
import { otpSchema } from '@/app/utils/formsValidations';
import cn from '@/app/utils/classNames';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/_redux/store';
import { useRouter } from 'next/navigation';
import { optVerification, sendResetCode } from '@/_redux/actions/auth';

export default function OTPVerificationForm({ email }: { email: string }) {
    const t = useTranslations();
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const OTPSchema = otpSchema(t);
    type OTPSchemaFormValues = z.infer<typeof OTPSchema>;
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const {
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
        clearErrors,
    } = useForm<OTPSchemaFormValues>({
        resolver: zodResolver(OTPSchema),
        defaultValues: {
            otp: '',
        },
    });

    const otp = watch('otp');

    const handleInputChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;

        clearErrors('otp');

        const otpArray = otp.padEnd(6, '').split('');
        otpArray[index] = value;
        const updatedOtp = otpArray.join('');
        setValue('otp', updatedOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const onSubmit = (data: OTPSchemaFormValues) => {
        dispatch(optVerification({
            formData: {
                email: email,
                code: data.otp,
            },
            t,
            navigate: router.push
        }))
    };

    useEffect(() => {
        inputsRef.current[0]?.focus();
    }, []);

    const hasError = !!errors.otp;
    const hasValue = otp.length > 0;

    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const startCountdown = () => {
        if (intervalId) clearInterval(intervalId);
        setTimer(15 * 60);

        const newIntervalId = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(newIntervalId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        setIntervalId(newIntervalId);
        dispatch(sendResetCode({
            formData: {
                email: email,
            },
            t,
            navigate: router.push
        }))
    };

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 lg:px-4">
            <div className="flex flex-col gap-1 pb-3">
                <h1 className="text-xl font-bold">{t('OTPVerification')}</h1>
                <p className="text-xs text-typography-lighter">{t('OTPVerificationDescription')}</p>
            </div>
            <div className="flex justify-center sm:gap-4 gap-2 sm:px-4" dir="ltr">
                {Array.from({ length: 6 }).map((_, i) => (
                    <input
                        key={i}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={otp[i] || ''}
                        onChange={(e) => handleInputChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        ref={(el) => (inputsRef.current[i] = el)}
                        className={cn(
                            'text-center sm:text-base text-xs rounded-full border bg-transparent outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold',
                            'w-8 h-8 sm:w-10 sm:h-10',
                            'placeholder:text-typography-lighter',
                            hasError
                                ? 'border-red ring-1 ring-red'
                                : otp[i]
                                    ? 'border-gold'
                                    : 'border-[#eceef2]'
                        )}
                    />
                ))}
            </div>

            {hasError && (
                <p className="text-xs text-red">{errors.otp?.message}</p>
            )}

            <Button
                type="submit"
                size='sm'
                className="w-full bg-gold text-bg-lighter py-2 px-4 rounded"
            >
                {t('verify')}
            </Button>

            <div className="flex flex-row items-center justify-center gap-1 text-xs">
                {timer > 0 ? (
                    <>
                        <span className="text-typography">
                            {t('resendIn')} </span>
                        <span className="text-gold underline"
                        > {formatTime(timer)}
                        </span>
                    </>
                ) : (
                    <>
                        <span className="text-typography">{t('codeNotReceived')}</span>
                        <button
                            type="button"
                            className="text-gold underline"
                            onClick={startCountdown}
                        >
                            {t('codeNotReceivedDescription')}
                        </button>
                    </>
                )}
            </div>
        </form>
    );
}
