import { Record } from './Record';

export interface Chit {
  chitName: string;
  id: string;
  managerName: string;
  amount: number;
  numberOfMonths: number;
  notes: string;
  records: Record[];
}
