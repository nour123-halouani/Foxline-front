import { Basket } from "../components/icons/Basket";
import { Dashboard } from "../components/icons/Dashboard";
import { useTranslations } from "../hooks/useTranslations";

export const useCustomerMenuItems = () => {
  const t = useTranslations();

  return [
    {
      name: t("dashboard"),
      href: "/customer/profile",
      icon: <Dashboard />,
    },
    {
      name: t("shipments"),
      href: "/customer/customer-dashboard",
      icon: <Basket />,
    },
  ];
};
