import {createBrowserRouter} from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import Login from './pages/Login';
import Register from './pages/Register';
import Inicio from './pages/Inicio';
import Dashboard from './pages/Dashboard';
import AdminLayout from './layouts/AdminLayout';
import Default from './layouts/Default';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children:[
            {
                index: true,
                path: '/',
                element: <Inicio />
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
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children:[
            {
                index: true,
                path:'/admin/dashboard',
                element: <Dashboard/>
            },
            {
                path:'/admin/productos',
                element: <Dashboard/>
            }
        ]
    }
]);

export default router;