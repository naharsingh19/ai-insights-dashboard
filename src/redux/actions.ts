// actions.ts
import { AiData } from '../types'; // Import AiData interface

export const SET_AI_DATA = 'SET_AI_DATA';

export interface SetAiDataAction {
  type: typeof SET_AI_DATA;
  payload: AiData;
}

export const setAiData = (data: AiData): SetAiDataAction => ({
  type: SET_AI_DATA,
  payload: data,
});






