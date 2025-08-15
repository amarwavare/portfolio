import PortfolioHomeSaga from "@/redux-saga/portfolioHomeSaga";
import { fork, all } from "redux-saga/effects";

export default function * RootSaga() {
    yield all([
        fork(PortfolioHomeSaga),
    ])
}