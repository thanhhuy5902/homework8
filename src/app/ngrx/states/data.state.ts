import { Article } from 'src/app/models/Article';

export interface DataState {
  isLoading: boolean;
  isSuccess: boolean;
  articalist: Article[];
  error: string;
}
