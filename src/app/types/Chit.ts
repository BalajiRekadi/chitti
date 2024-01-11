import { Record } from './Record';

export interface Chit {
  chitName: string;
  chitId: string;
  managerName: string;
  amount: number;
  numberOfMonths: number;
  notes: string;
  records: Record[];
}
