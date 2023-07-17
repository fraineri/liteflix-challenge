import { FiBell } from "react-icons/fi";

const BellNotificationIcon = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-1 w-[9px] h-[9px] bg-aqua rounded-full"></div>
      <FiBell size={28} className="text-white" />
    </div>
  );
};

export default BellNotificationIcon;
