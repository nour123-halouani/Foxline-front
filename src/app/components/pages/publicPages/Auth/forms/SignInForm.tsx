'use client';
import { Button, Input } from 'rizzui';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function SignInForm() {
    const t = useTranslations();

    return (
        <form className="w-full  space-y-4">
            <h1 className="text-3xl font-bold">{t("signIn")}</h1>
            <p className="text-typography-lighter mb-6">
                Sign in to your account
            </p>
            <Input label="Name" placeholder="name" className="text-typography" />
            <Input label="Email" type="email" placeholder="email" className="text-typography" />
            <Button
                type="submit"
                className="w-full bg-gold text-white py-2 px-4 rounded"
            >
                {t("signIn")}
            </Button>
        </form>
    );
}
