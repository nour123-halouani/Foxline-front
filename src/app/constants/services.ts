import { useTranslations } from '@/app/hooks/useTranslations';

export function useServicesList() {
    const t = useTranslations();

    return [
        {
            icon: "Boat",
            title: t("seaShipping"),
            description: t("seaShippingDescription"),
        },
        {
            icon: "Plane",
            title: t("airfreight"),
            description: t("airfreightDescription"),
        },
        {
            icon: "Handshake",
            title: t("externalMediation"),
            description: t("externalMediationDescription"),
        },
    ];
}
