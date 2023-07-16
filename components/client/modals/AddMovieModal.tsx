"use client";

import { COLORS, MODAL_SECTION } from "@/common/enum";
import { useModalStack } from "@/context/modal-stack.context";
import { useEffect, useState } from "react";
import ModalOpenButton from "../NavMenuButton";
import { TfiClose } from "react-icons/tfi";
import Logo from "@/components/server/Logo";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { AiOutlinePaperClip } from "react-icons/ai";
import MenuIcon from "@/components/server/MenuIcon";
import { ButtonRectangular } from "../ui/ButtonRectangular";

const AddMovieModal = () => {
  const { state, dispatch } = useModalStack();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionData, setSessionData] = useState<Session | null>();

  useEffect(() => {
    (async () => {
      const session = await getSession();
      setSessionData(session);
    })();
  }, []);

  useEffect(() => {
    const isModalOpen = state.modalStack.includes(MODAL_SECTION.ADD_MOVIE);
    setIsVisible(isModalOpen);
    setIsModalOpen(isModalOpen);
  }, [state]);

  return (
    isVisible && (
      <div
        className={`fixed bg-dark-grey w-full h-screen z-50 flex flex-col right-0 ${
          isModalOpen ? "animate-side-in-from-left" : "animate-side-out-to-left"
        }`}
      >
        {/* Nav */}
        <div className="flex flex-row justify-between items-center px-7 h-[42px]">
          <ModalOpenButton modalSection={MODAL_SECTION.ADD_MOVIE}>
            <div onClick={() => setIsModalOpen(false)}>
              <MenuIcon />
            </div>
          </ModalOpenButton>
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

        {/* FORM */}
        <div className="flex flex-col justify-around items-center h-full min-h-[350px] max-h-[700px] px-7  overflow-y-auto">
          <h2 className="font-bebas-neue text-aqua text-[22px] font-[700] tracking-widest uppercase">
            Agregar Pelicula
          </h2>

          {/* DRAG & DROP */}
          <div className="flex flex-row justify-center items-center w-full max-w-[602px] py-7 border-dashed border-[2px]">
            <AiOutlinePaperClip
              size={24}
              className="-scale-x-100 text-white mr-4"
            />
            <span className="font-bebas-neue text-white text-[16px] font-[400] tracking-widest uppercase">
              Agrega un archivo
            </span>
          </div>

          <div className="w-full text-center">
            <input
              type="text"
              className="bg-transparent w-6/12 m-w-[248px] text-white placeholder:text-white focus:placeholder:text-transparent text-center font-bebas-neue text-[16px] font-[400] tracking-widest uppercase outline-none border-b-[1px]"
              placeholder="titulo"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col justify-between h-36">
            <ButtonRectangular
              bgColor={COLORS.LIGHT_GREY}
              border={true}
              borderColor={COLORS.DARK_GREY}
              text="Subir pelicula"
              textColor={COLORS.BLACK}
              textWeight="700"
            />
            <ButtonRectangular
              bgColor={COLORS.DARK_GREY}
              border={true}
              borderColor={COLORS.LIGHT_GREY}
              text="Salir"
              textColor={COLORS.WHITE}
              textWeight="400"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default AddMovieModal;
