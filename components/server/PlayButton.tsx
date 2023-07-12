import { PiPlayLight, PiPlayFill } from "react-icons/pi";

type PlayButtonProps = {
  hasHoverEffect?: boolean;
  size: "small" | "medium";
};
const PlayButton: React.FC<PlayButtonProps> = ({
  hasHoverEffect = false,
  size,
}) => {
  let sizeStyle;
  let iconSize;

  switch (size) {
    case "small":
      sizeStyle = "w-5 h-5";
      iconSize = 10;
      break;
    case "medium":
      sizeStyle = "w-12 h-12";
      iconSize = 20;
      break;
    default:
      break;
  }

  return (
    <div
      className={`relative group/button bg-dark-grey/50 ${sizeStyle} flex justify-center items-center rounded-full border-[1px] transition-colors duration-300 ${
        hasHoverEffect ? "hover:bg-aqua hover:border-black" : ""
      }`}
    >
      <PiPlayLight
        size={iconSize}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white`}
      />
      {hasHoverEffect && (
        <PiPlayFill
          size={iconSize}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/button:opacity-100 text-black transition-opacity duration-300`}
        />
      )}
    </div>
  );
};

export default PlayButton;
