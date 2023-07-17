"use client";
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
  disabled?: boolean;
  onClick?: () => void;
};

export const ButtonRectangular: React.FC<ButtonRectangularProps> = ({
  bgColor,
  border,
  borderColor,
  text,
  textColor,
  textWeight = "400",
  icon,
  disabled: blocked = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={`flex flex-row justify-center items-center bg-${bgColor} w-[248px] h-[56px] text-${textColor} ${
        border ? `border border-${borderColor} border-spacing-1` : ""
      }`}
      disabled={blocked}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
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
