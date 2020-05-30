import { ActionTypes } from './action-types';

export const saveNewBillRequest = (data) => {
  return { type: ActionTypes.SAVE_NEW_BILL_REQUEST, payload: data };
};

export const getAllBillRequest = () => {
  return { type: ActionTypes.GET_ALL_BILL_REQUEST };
};

export const editExistingBillRequest = (data) => {
  return { type: ActionTypes.EDIT_EXISTING_BILL_REQUEST, payload: data };
};

export const removeExistingBillRequest = (data) => {
  return { type: ActionTypes.REMOVE_EXISTING_BILL_REQUEST, payload: data };
};

export const setIncrementalIdRequest = (data) => {
  return { type: ActionTypes.SET_INCREMENTAL_ID_REQUEST, payload: data };
};
