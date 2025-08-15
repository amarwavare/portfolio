import { configureStore } from '@reduxjs/toolkit';
import saga from 'redux-saga';
import RootSaga from './saga';
import { portfolioHomeReducer } from '@/global/constants';
import PortfolioHomeReducer from '@/redux-saga/portfolioHomeReducer';


const sagaMiddleware = saga();

export default configureStore({
    reducer: {
        [portfolioHomeReducer]: PortfolioHomeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(RootSaga);