export interface Tag {
  id: number;
  name: string;
}

export const createEmptyTag = (): Tag => ({
  id: 0,
  name: "",
});
