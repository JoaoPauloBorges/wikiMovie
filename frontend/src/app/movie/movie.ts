import { MoviePreview } from './movie-preview';
import { Person } from '../person/person';

export class Movie extends MoviePreview {
  actors?: Person[];
  director?: Person[];
  writer?: Person[];
}
