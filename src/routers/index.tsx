import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import DashboardScreen from '../screens/Dashboard';
import UserManagerScreen from '../screens/Manager/User';
import PostManagerScreen from '../screens/Manager/Post';
import NotFoundScreen from '../screens/NotFound';

export const PATHCONSTANTS = {
    DASHBOARD: {
        PATH: '/',
        TITLE: 'Dashboard',
        ELEMENT: <DashboardScreen />,
    },
    USER_MANAGER: {
        PATH: '/manager/user',
        TITLE: 'User Manager',
        ELEMENT: <UserManagerScreen />,
    },
    POST_MANAGER: {
        PATH: '/manager/post',
        TITLE: 'Post Manager',
        ELEMENT: <PostManagerScreen />,
    },
    NOT_FOUND: {
        PATH: '*',
        TITLE: 'Not Found',
        ELEMENT: <NotFoundScreen />,
    },
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path={PATHCONSTANTS.DASHBOARD.PATH} element={PATHCONSTANTS.DASHBOARD.ELEMENT} />
                <Route path={PATHCONSTANTS.USER_MANAGER.PATH} element={PATHCONSTANTS.USER_MANAGER.ELEMENT} />
                <Route path={PATHCONSTANTS.POST_MANAGER.PATH} element={PATHCONSTANTS.POST_MANAGER.ELEMENT} />
            </Route>

            {/* Not Found  */}

            <Route path={PATHCONSTANTS.NOT_FOUND.PATH} element={PATHCONSTANTS.NOT_FOUND.ELEMENT} />
        </Routes>
    );
};

export default AppRoutes;
