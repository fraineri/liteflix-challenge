import axios from "axios";
import { BACKEND_BASE_URL } from "@/common/constants";
import { SignedFileDTO } from "./dto/signed-file.dto";
import { SavMovieDTO } from "./dto/save-movie.dto";

export const getPresignedUrl = async (
  contentType: string
): Promise<SignedFileDTO> => {
  const params = `contentType=${contentType}`;
  const res = await axios.get(
    `${BACKEND_BASE_URL}/movie-upload/presigned-url?${params}`
  );
  return res.data;
};

export const saveMovie = async (title: string, fileKey: string, username: string) => {
  const res = await axios.post(
    `${BACKEND_BASE_URL}/movie-upload/save`,
    new SavMovieDTO(title, fileKey, username)
  );
  return res.data;
};
