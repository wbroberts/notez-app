export interface Note {
  id: string;
  title: string;
  body: string;
  dateCreated: Date;
  lastEdited?: string;
  color?: string;
}
