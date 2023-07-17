import { UPLOAD_STATUS } from "@/common/enum";
import React, { ChangeEvent, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

type UploadFileProps = {
  onS3FileUpload: (fileKey: string) => void;
};

const FileSelector: React.FC<UploadFileProps> = ({ onS3FileUpload }) => {
  const [uploadState, setUploadState] = useState<UPLOAD_STATUS>(
    UPLOAD_STATUS.IDLE
  );
  const [progress, setProgress] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);

  const uploadFileToS3 = async (file: File) => {
    // Get the presigned URL
    const fileType = encodeURIComponent(file.type);

    const signedFileResponse = await fetch(
      `/api/media/upload?contentType=${fileType}`,
      {
        method: "GET",
      }
    );
    const { signedUrl, fileKey } = await signedFileResponse.json();

    const req = new XMLHttpRequest();
    req.open("PUT", signedUrl);

    req.upload.addEventListener("progress", (e) => {
      setProgress(Math.floor((e.loaded / e.total) * 100));
    });

    req.upload.addEventListener("load", (e) => {
      setUploadState(UPLOAD_STATUS.SUCCESS);
      onS3FileUpload(fileKey);
    });

    req.upload.addEventListener("error", (e) => {
      setUploadState(UPLOAD_STATUS.ERROR);
    });

    // Upload file
    req.send(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragOver(true);
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    uploadFileToS3(e.dataTransfer.files[0]);
    setUploadState(UPLOAD_STATUS.UPLOADING);
  };

  const handleFileSelection = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    uploadFileToS3(e.target.files!.item(0)!);
    setUploadState(UPLOAD_STATUS.UPLOADING);
  };

  return (
    <>
      {/* IDLE */}
      {uploadState === UPLOAD_STATUS.IDLE ? (
        // WAITING FOR FILE
        <div
          className="flex flex-row justify-center items-center w-full max-w-[602px] py-7 border-dashed border-[2px]"
          style={{ backgroundColor: `${isDragOver ? "#919191" : "#242424"}` }}
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleDragOver(e)}
        >
          <AiOutlinePaperClip
            size={24}
            className="-scale-x-100 text-white mr-4"
          />
          <label
            htmlFor="upload-file"
            className="font-bebas-neue text-white text-[16px] font-[400] tracking-widest uppercase"
          >
            Agrega un archivo
          </label>
          <input
            type="file"
            id="upload-file"
            name="upload-file"
            className="hidden"
            onChange={(e) => handleFileSelection(e)}
          />
        </div>
      ) : uploadState === UPLOAD_STATUS.ERROR ? (
        // ERROR STATE
        <div className="relative w-full max-w-[602px]">
          <div>
            <span className="font-bebas-neue text-white text-[16px] font-[700] tracking-widest uppercase">{`¡ERROR! no se pudo cargar la película`}</span>
          </div>
          <div className="flex flex-row w-full items-center mt-4">
            <div className={"h-2 bg-[red] w-full"}></div>
          </div>
          <div className="absolute right-0">
            <span className="font-bebas-neue text-white text-[16px] font-[700] tracking-widest uppercase ">
              Reintentar
            </span>
          </div>
        </div>
      ) : (
        // UPLOAD STATE
        <div className="relative w-full max-w-[602px]">
          <div>
            <span className="font-bebas-neue text-white text-[16px] font-[700] tracking-widest uppercase">{`Cargando ${progress}%`}</span>
          </div>
          <div className="flex flex-row w-full items-center">
            <div
              className={"h-2 bg-aqua "}
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className={`h-1 bg-light-grey`}
              style={{ width: `${100 - progress}%` }}
            ></div>
          </div>

          {uploadState === UPLOAD_STATUS.UPLOADING ? (
            <div className="absolute right-0">
              <span className="font-bebas-neue text-white text-[16px] font-[700] tracking-widest uppercase">
                Cancelar
              </span>
            </div>
          ) : (
            <div className="absolute right-0">
              <span className="font-bebas-neue text-aqua text-[16px] font-[700] tracking-widest uppercase">
                Listo!
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FileSelector;
