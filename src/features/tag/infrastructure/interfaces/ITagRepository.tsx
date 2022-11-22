import { TagDTO } from "../DTOs/TagDTO";

export interface ITagRepository {
  CreateTagAsync: (dto: TagDTO) => Promise<string | undefined>;
  UpdateTagAsync: (dto: TagDTO) => Promise<string | undefined>;

  GetTagByIdAsync: (id: string) => Promise<TagDTO | undefined>;
  GetAllTagAsync: () => Promise<TagDTO[] | undefined>;
}
