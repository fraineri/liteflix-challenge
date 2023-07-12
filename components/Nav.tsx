import Image from "next/image";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import { getAuthSession } from "@/lib/authOptions";

const Nav = async () => {
  const sessionData = await getAuthSession();
  // console.log(">>>> sessionData", sessionData);

  return (
    <div className="z-10 fixed min-w-[250px] w-5/6 h-42 py-3 flex items-center justify-between left-[50%] transform -translate-x-1/2">
      <MenuIcon />
      <Logo />
      <Image
        src={`${sessionData?.user.image}`}
        width={40}
        height={40}
        alt="Profile picture"
        className="rounded-full"
      />
    </div>
  );
};

export default Nav;
