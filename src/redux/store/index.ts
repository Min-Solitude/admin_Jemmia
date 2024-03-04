import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { apiService } from '@/redux/services/apiService';
import { authReducer } from '../reducers/auth/authReducer';

// config redux-persist
const persistConfig = {
    key: 'root',
    storage,
    timeout: 30000,
    stateReconciler: autoMergeLevel2,
};

// reducers
const rootReducer = combineReducers({
    auth: authReducer,
});

type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// store
export const store = configureStore({
    reducer: {
        root: persistedReducer,
        [apiService.reducerPath]: apiService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiService.middleware),
});

export const persistor = persistStore(store);
