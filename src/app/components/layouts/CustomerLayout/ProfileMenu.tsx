import { Avatar, Button, Popover } from "rizzui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/_redux/actions/auth";
import { useTranslations } from "@/app/hooks/useTranslations";
import { User } from "../../icons/User";
import { Settings } from "../../icons/Settings";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user as any)
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations();

  const menuItems = [
    {
      icon: <User />,
      name: t("profile"),
      href: "/",
    },
    {
      icon: <Settings />,
      name: t("accountSettings"),
      href: "/",
    },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    if (user?.id) {
      await dispatch(logout({ t }));
    }
  };

  function DropdownMenu() {
    return (
      <div className="w-48 bg-bg text-typography-dark p-2 flex flex-col gap-3">
        <div className="grid font-medium ">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group my-0.5 flex flex-row gap-2 items-center rounded-md p-1.5 hover:bg-gold-lighter focus:outline-none text-sm"
            >
              <div className="[&>svg]:h-[20px] [&>svg]:w-[20px] text-gold">
                {item.icon}
              </div>
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-300" />
        <Button
          className="h-auto w-full justify-start text-[#F67366] font-semibold outline-none focus-visible:ring-0"
          variant="text"
          onClick={handleLogout}
        >
          {t("logout")}
        </Button>
      </div>
    );
  }

  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      shadow="sm"
      placement="bottom-end"
    >
      <Popover.Trigger>
        <button
          className="w-7 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-8"
        >
          <Avatar
            name={user?.name ?? ""}
            size="sm"
            color="primary"
            className="text-bg"
          />
        </button>
      </Popover.Trigger>
      <Popover.Content className="z-[9999] p-0">
        <DropdownMenu />
      </Popover.Content>
    </Popover >
  );
}
