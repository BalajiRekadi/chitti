import { CHITS } from './chits.action';
import { Chit } from '../types/Chit';

export interface IState {
  chit: IChitState;
}

export interface IChitState {
  chits: Chit[];
  selectedChitId: string;
}

const initialState: IChitState = {
  chits: [],
  selectedChitId: '',
};

export function chitReducer(state = initialState, action: any) {
  switch (action.type) {
    case CHITS.ADD_SUCCESS:
      return { ...state, chits: [...state.chits, action.payload] };
    case CHITS.GET_SUCCESS:
      return { ...state, chits: action.payload };
    case CHITS.SET_SELECTED_CHIT_ID:
      return { ...state, selectedChitId: action.payload };

    default:
      return state;
  }
}
