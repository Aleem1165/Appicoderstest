import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import isAuthenticatedReducer from './isAuthenticatedSlice';
import userReducer from './userSlice';

const appReducer = combineReducers({
    isAuthenticated: isAuthenticatedReducer,
    user: userReducer
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'RESET_STORE') {
        AsyncStorage.removeItem('persist:root');
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
