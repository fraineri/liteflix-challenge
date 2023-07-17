import Image from "next/image";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import { getAuthSession } from "@/lib/authOptions";
import ModalOpenButton from "../client/NavMenuButton";
import { MenuModal } from "../client/modals/MenuModal";
import AddMovieModal from "../client/modals/AddMovieModal";
import { DIRECTION, MODAL_SECTION } from "@/common/enum";
import { TfiPlus } from "react-icons/tfi";
import BellNotificationIcon from "./ui/BellNotificationIcon";

const Nav: React.FC = async ({}) => {
  const sessionData = await getAuthSession();

  return (
    <div className="relative">
      {/* MOBILE NAVBAR */}
      <div className="lg:invisible">
        <div className="z-10 fixed top-6 min-w-[250px] w-5/6 h-[42px] py-3 flex items-center justify-between left-[50%] transform -translate-x-1/2">
          <ModalOpenButton modalSection={MODAL_SECTION.MAIN_MENU}>
            <MenuIcon />
          </ModalOpenButton>
          <Logo />
          <Image
            src={`${sessionData?.user.image}`}
            width={40}
            height={40}
            alt="Profile picture"
            className="rounded-full"
          />
        </div>
      </div>

      {/* TABLET - MONITOR NAVBAR */}
      <div className="invisible lg:visible">
        <div className="z-10 fixed top-6 min-w-[250px] w-5/6 h-[42px] py-3 flex items-center justify-between left-[50%] transform -translate-x-1/2">
          <div className="flex flex-row justify-between items-center w-[367px]">
            <Logo />
            <ModalOpenButton modalSection={MODAL_SECTION.ADD_MOVIE}>
              <div className="flex flex-row items-center cursor-pointer">
                <TfiPlus className="text-white" />
                <span className="ml-2 font-bebas-neue text-[16px] font-[700] tracking-widest uppercase text-white">
                  Agregar pelicula
                </span>
              </div>
            </ModalOpenButton>
          </div>
          <div className="flex flex-row justify-between items-center w-44">
            <ModalOpenButton modalSection={MODAL_SECTION.MAIN_MENU}>
              <MenuIcon orientation={DIRECTION.LEFT} />
            </ModalOpenButton>
            <BellNotificationIcon />
            <Image
              src={`${sessionData?.user.image}`}
              width={40}
              height={40}
              alt="Profile picture"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <MenuModal />
      <AddMovieModal />
    </div>
  );
};

export default Nav;
