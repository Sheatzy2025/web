import { UUIDTypes} from 'uuid';

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

interface DactyText {
  id : UUIDTypes;
  content : string;
  level : string;
}

type NewFilm = Omit<Film, "id">;
type NewDactyText = Omit<DactyText, "id">;

export type { Film, NewFilm, DactyText, NewDactyText };
