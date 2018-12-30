export interface Note {
  id: string;
  title: string;
  body: any;
  dateCreated: Date;
  lastEdited?: string;
  color?: string;
}
