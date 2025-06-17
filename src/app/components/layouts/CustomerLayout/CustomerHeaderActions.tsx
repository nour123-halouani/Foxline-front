import { Badge, ActionIcon } from "rizzui";
import { Notification } from "../../icons/Notification";
import ProfileMenu from "./ProfileMenu";
import NotificationDropdown from "./NotificationDropdown";

export default function CustomerHeaderActions() {
  return (
    <div className="shrink-0 flex flex-row items-center xl:gap-3 gap-2">
      <NotificationDropdown>
        <ActionIcon
          aria-label="Notification"
          variant="text"
          className="relative inline-flex backdrop-blur-md md:h-9 md:w-9 [&>svg]:h-[23px] [&>svg]:w-[23px]"
        >
          <Notification className="text-typography-dark" />
          <Badge
            size="sm"
            className="absolute right-0 top-1 -translate-y-1/3 text-white text-[8px] font-thin bg-[#F67366] h-[15px] w-[15px]"
          >
            2
          </Badge>
        </ActionIcon>
      </NotificationDropdown>
      <ProfileMenu />
    </div>
  );
}
