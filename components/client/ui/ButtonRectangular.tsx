import { COLORS } from "@/common/enum";
import { ReactElement } from "react";

type ButtonRectangularProps = {
  bgColor: COLORS;
  border?: boolean | false;
  borderColor?: COLORS;
  text: string;
  textColor: COLORS;
  textWeight?: "400" | "700";
  icon?: ReactElement | null;
};

export const ButtonRectangular: React.FC<ButtonRectangularProps> = ({
  bgColor,
  border,
  borderColor,
  text,
  textColor,
  textWeight = "400",
  icon,
}) => {
  return (
    <button
      className={`flex flex-row justify-center items-center bg-${bgColor} w-[248px] h-[56px] text-${textColor} ${
        border ? `border border-${borderColor} border-spacing-1` : ""
      }`}
    >
      {icon !== null && icon}
      <span
        className={`font-bebas-neue uppercase tracking-widest text-[18px] font-[${textWeight}]`}
      >
        {text}
      </span>
    </button>
  );
};
