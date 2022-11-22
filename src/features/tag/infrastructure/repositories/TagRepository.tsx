import axios, { AxiosResponse } from "axios";
import { TagDTO } from "../DTOs/TagDTO";
import { ITagRepository } from "../interfaces/ITagRepository";

const baseUrl = `${import.meta.env.VITE_WEB_API_URL}`;

const CreateTagAsync = async (
  requestDTO: TagDTO
): Promise<string | undefined> => {
  const response: AxiosResponse<string> = await axios.post(
    `${baseUrl}/create`,
    requestDTO
  );

  return response.data;
};

const UpdateTagAsync = async (
  requestDTO: TagDTO
): Promise<string | undefined> => {
  const response: AxiosResponse<string> = await axios.put(
    `${baseUrl}/update`,
    requestDTO
  );

  return response.data;
};

const GetTagByIdAsync = async (id: string): Promise<TagDTO | undefined> => {
  const response: AxiosResponse<TagDTO> = await axios.get(`${baseUrl}/${id}`);

  return response.data;
};

const GetAllTagAsync = async (): Promise<TagDTO[] | undefined> => {
  const response: AxiosResponse<TagDTO[]> = await axios.get(
    `${baseUrl}/getAll`
  );

  return response.data;
};

export const TagRepository: ITagRepository = {
  CreateTagAsync,
  UpdateTagAsync,

  GetTagByIdAsync,
  GetAllTagAsync,
};
