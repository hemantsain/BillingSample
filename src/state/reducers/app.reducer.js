import { ActionTypes } from '../action-types';

const initialState = {
  isLoading: false,
  getAllBills: [],
  currentId: 0,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SAVE_NEW_BILL_REQUEST:
      return {
        ...state,
        isLoading: true,
        getAllBills: [...state.getAllBills, action.payload],
      };
    case ActionTypes.GET_ALL_BILL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_ALL_BILL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getAllBills: action.result,
      };
    case ActionTypes.GET_ALL_BILL_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.EDIT_EXISTING_BILL_REQUEST:
      const objIndex = state.getAllBills.findIndex(
        (obj) => obj.id === action.payload.id,
      );
      return {
        ...state,
        getAllBills: [
          ...state.getAllBills.slice(0, objIndex),
          action.payload,
          ...state.getAllBills.slice(objIndex + 1),
        ],
      };
    case ActionTypes.REMOVE_EXISTING_BILL_REQUEST:
      return {
        ...state,
        getAllBills: [
          ...state.getAllBills.filter((item) => item.id !== action.payload.id),
        ],
      };
    case ActionTypes.SET_INCREMENTAL_ID_REQUEST:
      return {
        ...state,
        currentId: action.payload,
      };
    default:
      return state;
  }
}
export default appReducer;
