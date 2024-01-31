import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Default from './layouts/default';
import Productos from './pages/Productos';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children:[
            {
                index: true,
                path: '/',
                element: <Productos />
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element: <Login/>
            },
            {
                path:'/auth/register',
                element: <Register/>
            }
        ]
    }
]);

export default router;