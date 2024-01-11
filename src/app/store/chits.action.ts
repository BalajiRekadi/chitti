import { createAction, props } from '@ngrx/store';
import { Chit } from '../types/Chit';

export enum CHITS {
  GET_START = '[chit] GET START',
  GET_SUCCESS = '[chit] GET SUCCESS',
  GET_FAILURE = '[chit] GET FAILURE',

  ADD_START = '[chit] ADD START',
  ADD_SUCCESS = '[chit] ADD SUCCESS',
  ADD_FAILURE = '[chit] ADD FAILURE',

  EDIT = '[chit] EDIT',
  DELETE = '[chit] DELETE',

  SET_SELECTED_CHIT_ID = '[chit] SET_SELECTED_CHIT_ID',
}

// API actions
export const getChitsStart = createAction(CHITS.GET_START);
export const getChitsSuccess = createAction(CHITS.GET_SUCCESS, props<any>());
export const getChitsFailure = createAction(CHITS.GET_FAILURE);

export const addChitStart = createAction(CHITS.ADD_START, props<any>());
export const addChitSuccess = createAction(CHITS.ADD_SUCCESS, props<any>());
export const addChitFailure = createAction(CHITS.ADD_FAILURE, props<any>());

// Component actions
export const setSelectedChitId = createAction(
  CHITS.SET_SELECTED_CHIT_ID,
  props<any>()
);
