import { portfolioHomeReducer } from '@/global/constants';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
  try {
    const user = 'Jon Doe'
    yield put({ type: 'portfolioHomeReducer/USER_FETCH_SUCCEEDED', user: user })
  } catch (e: any) {
    yield put({ type: 'portfolioHomeReducer/USER_FETCH_FAILED', message: e.message })
  }
}

export default function * PortfolioHomeSaga() {
  yield takeLatest(`${portfolioHomeReducer}/fetchUserAction`,fetchUser);
}