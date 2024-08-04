export type Folder = {
  createdAt: Date;
  description: string | null;
  folder?: Folder | null;
  folders?: Array<Folder>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
