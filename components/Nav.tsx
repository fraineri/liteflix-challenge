import Image from "next/image";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import { getAuthSession } from "@/lib/authOptions";
import NavMenuButton from "./client/NavMenuButton";
import { MenuModal } from "./client/MenuModal";

const Nav: React.FC = async ({}) => {
  const sessionData = await getAuthSession();

  return (
    <div className="relative">
      <div className="z-10 fixed min-w-[250px] w-5/6 h-[42px] py-3 flex items-center justify-between left-[50%] transform -translate-x-1/2">
        <NavMenuButton>
          <MenuIcon />
        </NavMenuButton>
        <Logo />
        <Image
          src={`${sessionData?.user.image}`}
          width={40}
          height={40}
          alt="Profile picture"
          className="rounded-full"
        />
      </div>
      <MenuModal />
    </div>
  );
};

export default Nav;
