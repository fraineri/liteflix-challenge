import { DIRECTION } from "@/common/enum";

type MenuIconProps = {
  orientation?: DIRECTION.LEFT | DIRECTION.RIGHT;
};
const MenuIcon: React.FC<MenuIconProps> = ({
  orientation = DIRECTION.RIGHT,
}) => {
  return (
    <div
      className={`w-[27px] h-[24px] ${
        orientation === DIRECTION.LEFT ? "-" : ""
      }scale-x-100`}
    >
      <div className="bg-white w-[27px] h-[1px] mb-[6px]"></div>
      <div className="bg-white w-[27px] h-[1px] mb-[6px]"></div>
      <div className="bg-white w-[17px] h-[1px]"></div>
    </div>
  );
};

export default MenuIcon;
