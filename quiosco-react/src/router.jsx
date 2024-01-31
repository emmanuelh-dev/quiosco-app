import {createBrowserRouter} from 'react-router-dom';
import Default from './layouts/default';
import AuthLayout from './layouts/login';
import Inicio from './pages/Inicio';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children:[
            {
                index: true,
                path: '/',
                element: <Dashboard/>
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