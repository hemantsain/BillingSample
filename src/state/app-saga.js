import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './action-types';
import { saveNewBill } from './api';

// function* saveNewBillSaga(action) {
//   try {
//     const result = yield call(saveNewBill, action.payload);
//     yield put({ type: ActionTypes.SAVE_NEW_BILL_SUCCESS, result });
//   } catch (error) {
//     yield put({ type: ActionTypes.SAVE_NEW_BILL_ERROR, error });
//   }
// }

export default function* watchUserSaga() {
  // yield takeEvery(ActionTypes.SAVE_NEW_BILL_REQUEST, saveNewBillSaga);
  // yield takeEvery(ActionTypes.FETCH_TOKEN_REQUEST, fetchUserTokenSaga);
  // yield takeEvery(ActionTypes.FETCH_ORDER_LIST_REQUEST, fetchOrdersListSaga);
  // yield takeEvery(
  //   ActionTypes.FETCH_ORDER_DETAILS_REQUEST,
  //   fetchOrderDetailsSaga,
  // );
  // yield takeEvery(ActionTypes.UPDATE_ORDER_ITEM_REQUEST, updateOrderItemSaga);
  // yield takeEvery(ActionTypes.UPDATE_BAGS_COUNT_REQUEST, updateBagsCountSaga);
}
