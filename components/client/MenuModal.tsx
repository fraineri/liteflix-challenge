"use client";

import Image from "next/image";
import Logo from "../Logo";
import NavMenuButton from "./NavMenuButton";
import { TfiClose, TfiPlus } from "react-icons/tfi";
import { useModalStack } from "@/context/modal-stack.context";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { MODAL_SECTION } from "@/common/enum";
import { Session } from "next-auth";

export const MenuModal = () => {
  const { state, dispatch } = useModalStack();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sessionData, setSessionData] = useState<Session | null>();

  useEffect(() => {
    const isModalOpen = state.modalStack.includes(MODAL_SECTION.MAIN_MENU);
    setIsVisible(isModalOpen);
    setIsMenuOpen(isModalOpen);
  }, [state]);

  const menuList = [
    {
      id: "Home",
      text: "Inicio",
      action: () => {},
    },
    {
      id: "Series",
      text: "Series",
      action: () => {},
    },
    {
      id: "Movies",
      text: "Peliculas",
      action: () => {},
    },
    {
      id: "Recent",
      text: "Agregadas recientemente",
      action: () => {},
    },
    {
      id: "Popular",
      text: "Populares",
      action: () => {},
    },
    {
      id: "MyMovies",
      text: "Mis peliculas",
      action: () => {},
    },
    {
      id: "MyList",
      text: "Mi lista",
      action: () => {},
    },
  ];

  useEffect(() => {
    (async () => {
      const session = await getSession();
      setSessionData(session);
    })();
  }, []);

  return (
    isVisible && (
      <div
        className={`fixed bg-dark-grey w-full h-screen z-50 flex flex-col left-0 ${
          isMenuOpen ? "animate-side-in-from-right" : "animate-side-out-to-right"
        }`}
      >
        {/* Nav */}
        <div className="flex flex-row justify-between items-center px-7 h-[42px]">
          <div onClick={() => setIsMenuOpen(false)}>
            <NavMenuButton>
              <TfiClose size={20} className="text-white" />
            </NavMenuButton>
          </div>
          <Logo />
          {sessionData?.user && (
            <Image
              src={`${sessionData?.user?.image}`}
              width={40}
              height={40}
              alt="Profile picture"
              className="rounded-full"
            />
          )}
        </div>

        {/* MENU LIST */}
        <div className="overflow-y-auto h-full pt-8 px-7">
          <div className="h-11/12">
            {menuList.map((item) => (
              <div key={item.id} className="mb-5 cursor-pointer">
                <span className="font-bebas-neue text-[16px] font-[400] text-white tracking-widest uppercase hover:font-[700]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center mt-12  cursor-pointer">
            <TfiPlus className="text-white" />
            <span className="ml-2 font-bebas-neue text-[16px] font-[700] tracking-widest uppercase text-white">
              Agregar pelicula
            </span>
          </div>
          <div className="mt-12 pb-[42px] cursor-pointer">
            <span className="font-bebas-neue text-[16px] font-[400] text-white tracking-widest uppercase hover:font-[700]">
              Cerrar sesion
            </span>
          </div>
        </div>
      </div>
    )
  );
};
