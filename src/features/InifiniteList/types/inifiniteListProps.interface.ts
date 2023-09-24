import { DataItem } from '../../../entities/List/types/data.interface';

export interface InifiniteListProps {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: DataItem[];
  loadNextPage: () => void;
}
