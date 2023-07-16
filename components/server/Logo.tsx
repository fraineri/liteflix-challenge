type LogoProps = {
  fontSizePx?: number | undefined;
};
const Logo: React.FC<LogoProps> = ({ fontSizePx }: LogoProps) => {
    const fontSizeStyle: string = fontSizePx ? `text-[${fontSizePx.toString()}px]` : 'text-[28px]'
  return (
    <h1 className={`font-bebas-neue text-center font-[400] text-aqua ${fontSizeStyle} tracking-widest`}>
      <span className="font-[700]">LITE</span>
      <span>FLIX</span>
    </h1>
  );
};

export default Logo;
