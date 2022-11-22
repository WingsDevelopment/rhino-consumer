import { Tag } from "../../models/Tag";

export interface TagDTO {
  id: number;
  name: string;
}

export const tagDTOExtension = (model: Tag): TagDTO => ({ ...model });

export const tagModelExtension = (dto: TagDTO): Tag => ({ ...dto });
