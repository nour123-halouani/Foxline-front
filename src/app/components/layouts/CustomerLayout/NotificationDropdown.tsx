"use client";
import { RefObject, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Popover, Badge, Button } from "rizzui";
import { PiCheck } from "react-icons/pi";
import useMedia from "react-use/lib/useMedia";
import { Notification } from "../../icons/Notification";
import SimpleBar from "../../ui/simplebar";
import { useTranslations } from "@/app/hooks/useTranslations";
import { useLanguage } from "@/app/context/LanguageContext";
import "dayjs/locale/fr";
import "dayjs/locale/ar";

dayjs.extend(relativeTime);

const data = [
  {
    id: 1,
    name: "Invitation for crafting engaging designs",
    icon: <Notification />,
    unRead: true,
    sendTime: "2025-06-01T09:35:31.820Z",
  },
  {
    id: 2,
    name: " dashboard redesign",
    icon: <Notification />,
    unRead: true,
    sendTime: "2025-05-30T09:35:31.820Z",
  },
  {
    id: 3,
    name: "3 New Incoming Project Files:",
    icon: <Notification />,
    unRead: false,
    sendTime: "2025-06-01T09:35:31.820Z",
  },
  {
    id: 4,
    name: "Swornak purchased ",
    icon: <Notification />,
    unRead: false,
    sendTime: "2025-05-21T09:35:31.820Z",
  },
  {
    id: 5,
    name: "Task #45890 merged with #45890 in “Ads Pro Admin Dashboard project:",
    icon: <Notification />,
    unRead: true,
    sendTime: "2025-06-01T09:35:31.820Z",
  },
  {
    id: 6,
    name: "3 new application design concepts added",
    icon: <Notification />,
    unRead: true,
    sendTime: "2025-05-15T09:35:31.820Z",
  },
  {
    id: 7,
    name: "Your order has been placed",
    icon: <Notification />,
    unRead: false,
    sendTime: "2025-05-16T09:35:31.820Z",
  },
  {
    name: "Order has been shipped to #123221",
    icon: <Notification />,
    unRead: false,
    sendTime: "2025-05-01T09:35:31.820Z",
  },
];

function NotificationsList({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations();
  const { lang } = useLanguage()
  dayjs.locale(lang);

  return (
    <div className="w-[280px]">
      <h2 className="font-semibold pb-3">{t('notifications')}</h2>
      <SimpleBar className="max-h-[350px] py-2">
        <div className="grid cursor-pointer grid-cols-1 gap-1">
          {data.map((item) => (
            <div
              key={item.name + item.id}
              className="group grid grid-cols-[auto_minmax(0,1fr)] gap-3 p-2 rounded-md justify-center items-center hover:bg-gold-lighter"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded bg-gold-lighter [&>svg]:h-auto [&>svg]:w-3">
                {item.icon}
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center">
                <div className="w-full">
                  <p className="font-semibold text-xs">
                    {item.name}
                  </p>
                  <span className="whitespace-nowrap text-[10px] text-typography-dark">
                    {dayjs(item.sendTime).fromNow(true)}
                  </span>
                </div>
                <div className="ms-auto flex-shrink-0">
                  {item.unRead ? (
                    <Badge renderAsDot color="primary" />
                  ) : (
                    <span className="inline-block rounded-full bg-gold-lighter p-0.5">
                      <PiCheck className="h-auto w-[7px]" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
      <Button
        onClick={() => setIsOpen(false)}
        className="block text-white text-center w-full text-sm"
      >
        {t("seeMore")}
      </Button>
    </div>
  );
}

export default function NotificationDropdown({
  children,
}: {
  children: JSX.Element & { ref?: RefObject<any> };
}) {
  const isMobile = useMedia("(max-width: 480px)", false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      shadow="sm"
      placement={isMobile ? "bottom" : "bottom-end"}
    >
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content className="z-[9999] bg-bg [&>svg]:hidden sm:[&>svg]:inline-flex">
        <NotificationsList setIsOpen={setIsOpen} />
      </Popover.Content>
    </Popover>
  );
}
