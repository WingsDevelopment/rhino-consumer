import { ITagRepository } from "../infrastructure/interfaces/ITagRepository";
import { TagRepository } from "../infrastructure/repositories/TagRepository";

interface IDIContext {
  TagRepository: ITagRepository;
}

export const DIContext: IDIContext = {
  TagRepository: TagRepository,
};
