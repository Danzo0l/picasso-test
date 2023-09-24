import { CSSProperties } from 'react';

export interface ItemViewProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  style: CSSProperties | undefined;
}
