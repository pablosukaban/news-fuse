import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { newsApi } from './services/newsApi';
import { UserSlice } from './reducers/UserSlice';
import { ParamsSlice } from './reducers/ParamsReducer';
import { newsAIApi } from './services/newsAIApi';

const rootReducer = combineReducers({
    [newsApi.reducerPath]: newsApi.reducer,
    [newsAIApi.reducerPath]: newsAIApi.reducer,
    user: UserSlice.reducer,
    params: ParamsSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(newsApi.middleware)
                .concat(newsAIApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
