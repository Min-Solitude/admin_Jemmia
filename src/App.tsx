import React, { Suspense } from 'react';
import Loading from './components/shared/Loading';
import AppRoutes from './routers';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loading />}>
                <AppRoutes />
            </Suspense>
        </Provider>
    );
};

export default App;
