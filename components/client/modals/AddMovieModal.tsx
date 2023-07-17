"use client";

import { COLORS, MODAL_SECTION } from "@/common/enum";
import { useModalStack } from "@/context/modal-stack.context";
import { ChangeEvent, useEffect, useState } from "react";
import ModalOpenButton from "../NavMenuButton";
import { TfiClose } from "react-icons/tfi";
import Logo from "@/components/server/Logo";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Image from "next/image";
import MenuIcon from "@/components/server/MenuIcon";
import { ButtonRectangular } from "../ui/ButtonRectangular";
import FileSelector from "../ui/FileSelector";

const AddMovieModal = () => {
  const { state, dispatch } = useModalStack();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionData, setSessionData] = useState<Session | null>();

  const [fileKey, setFileKey] = useState<string | undefined>(undefined);
  const [movieTitle, setMovieTitle] = useState<string | undefined>(undefined);
  const [succeedState, setSucceedState] = useState<boolean>(false);

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

  const onS3FileUpload = async (fileKey: string) => {
    setFileKey(fileKey);
  };

  const handleSaveMovie = async () => {
    const res = await fetch("/api/media/save", {
      method: "POST",
      body: JSON.stringify({
        title: movieTitle,
        fileKey: fileKey,
        username: sessionData?.user.username,
      }),
    });

    const data = await res.json();
  };

  const handleExitModal = () => {};

  return (
    isVisible && (
      <div
        className={`fixed bg-dark-grey w-full lg:w-[730px] h-screen lg:h-[440px] z-50 flex flex-col lg:left-[calc(50%-365px)] lg:bottom-0 ${
          isModalOpen
            ? "animate-side-in-from-left lg:animate-side-in-from-bottom-to-middle"
            : "animate-side-out-to-left lg:animate-side-out-to-bottom-from-middle"
        }`}
      >
        {/* Nav */}
        <div className="flex flex-row justify-between  lg:justify-end items-center px-7 h-[42px] mt-6">
          <ModalOpenButton modalSection={MODAL_SECTION.ADD_MOVIE}>
            <div onClick={() => setIsModalOpen(false)}>
              <div className="visible lg:invisible">
                <MenuIcon />
              </div>
              <TfiClose size={20} className="invisible lg:visible text-white" />
            </div>
          </ModalOpenButton>
          <div className="lg:hidden ">
            <Logo />
          </div>
          <div className="lg:hidden">
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
        </div>

        {succeedState ? (
          <form className="flex flex-col justify-around items-center h-full min-h-[350px] max-h-[700px] px-7  overflow-y-auto">
            <h2 className="font-bebas-neue text-aqua text-[22px] font-[700] tracking-widest uppercase">
              Agregar Pelicula
            </h2>

            {/* DRAG & DROP */}
            <FileSelector onS3FileUpload={onS3FileUpload} />

            <div className="w-full text-center mt-7">
              <input
                type="text"
                className="bg-transparent w-6/12 m-w-[248px] text-white placeholder:text-white focus:placeholder:text-transparent text-center font-bebas-neue text-[16px] font-[400] tracking-widest uppercase outline-none border-b-[1px]"
                placeholder="titulo"
                value={movieTitle}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMovieTitle(e.target.value)
                }
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col justify-between lg:justify-center h-36">
              <ButtonRectangular
                bgColor={COLORS.LIGHT_GREY}
                border={true}
                borderColor={COLORS.DARK_GREY}
                text="Subir pelicula"
                textColor={COLORS.BLACK}
                textWeight="700"
                disabled={!(fileKey && movieTitle)}
                onClick={handleSaveMovie}
              />
              <div className="lg:hidden">
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
          </form>
        ) : (
          <div className="flex flex-col justify-around items-center h-full min-h-[350px] max-h-[700px] px-7  overflow-y-auto">
            <Logo />
            <div className="text-center">
              <span className="block font-bebas-neue text-white text-[24px] font-[400] tracking-widest uppercase">
                ¡Felicitaciones!
              </span>
              <span className="block font-bebas-neue text-white text-[24px] font-[400] tracking-widest uppercase mt-4">
                Liteflix The Movie fue correctamente subida.
              </span>
            </div>

            <ModalOpenButton modalSection={MODAL_SECTION.ADD_MOVIE}>
              <div onClick={() => setIsModalOpen(false)}>
                <ButtonRectangular
                  bgColor={COLORS.DARK_GREY}
                  border={true}
                  borderColor={COLORS.LIGHT_GREY}
                  text="Salir"
                  textColor={COLORS.WHITE}
                  textWeight="400"
                />
              </div>
            </ModalOpenButton>
          </div>
        )}
      </div>
    )
  );
};

export default AddMovieModal;
