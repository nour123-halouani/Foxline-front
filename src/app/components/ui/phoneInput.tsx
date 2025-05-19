'use client';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import { useTranslations } from '@/app/hooks/useTranslations';

type PhoneNumberInputProps = {
    control: any;
    name: string;
    error?: string;
    label: string;
};

const ALLOWED_COUNTRIES: any = ['FR', 'DE', 'BE', 'IT', 'LY'];

export default function PhoneNumberInput({ control, name, error, label }: PhoneNumberInputProps) {
    const [focused, setFocused] = useState(false);
    const t = useTranslations();

    return (
        <div className="lg:w-1/2 w-full">
            <label className="text-xs block mb-[4px] font-medium">{label}</label>
            <div
                className={`rounded-[6px] transition-all duration-200 px-2 !h-[32.37px]
                 ${focused && !error ? 'border-[1px] border-gold ring-[0.7px] ring-gold' :
                        !error && 'border-[1px] border-[#eceef2] ring-[0.7px] ring-[#eceef2] hover:border-[1px] hover:border-gold hover:ring-[0.7px] hover:ring-[#eceef2]'}
                 ${error && 'border-red border-[1px] ring-[0.7px] ring-red'}
                 `}
            >
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <PhoneInput
                            {...field}
                            international
                            defaultCountry="LY"
                            countries={ALLOWED_COUNTRIES}
                            className="PhoneInputInput"
                            inputComponent="input"
                            onFocus={() =>
                                setFocused(true)
                            }
                            onBlur={(e) => {
                                field.onBlur();
                                setFocused(false);
                            }}
                            limitMaxLength
                        />

                    )}
                />
            </div>
            {error && <p className="text-[11px] text-red mt-[0.8px]">{error === "Required" ? t('requiredField') : error}</p>}
        </div>
    );
}