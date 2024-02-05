import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MdMenuOpen } from "react-icons/md";

function TopMenu() {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                           <MdMenuOpen className="size-7" />
                        </button>
                        <a href="/" className="text-xl font-bold flex items-center lg:ml-2.5">
                            <img
                                src="../img/logo.svg"
                                className="w-14"
                                alt="Quiosco App Logo"
                            />
                        </a>
                    </div>
                    <div className="flex items-center">

                    </div>
                </div>
            </div>
        </nav>
    );
}
function Sidebar(){
    return(
        <aside
        id="sidebar"
        className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col transition-width duration-75 w-64`}
        aria-label="Sidebar"
    >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white space-y-3">
                <Link className="text-base text-gray-900 font-bold rounded-md items-center p-2 hover:bg-amber-400 hover:text-white group flex gap-4 w-full py-4" to={'/admin/dashboard'}>Inicio</Link>
                <Link className="text-base text-gray-900 font-bold rounded-md items-center p-2 hover:bg-amber-400 hover:text-white group flex gap-4 w-full py-4" to={'/admin/productos'}>Productos</Link>
                <Link className="text-base text-gray-900 font-bold rounded-md items-center p-2 hover:bg-amber-400 hover:text-white group flex gap-4 w-full py-4" to={'/admin/pedidos'}>Pedidos</Link>
                </div>
            </div>
        </div>
    </aside>
    )
}
export default function AdminLayout() {
    const { user, error } = useAuth({
        middleware: "auth",
    });
    return (
        <div>
            <div>
                <TopMenu />
                <div className="flex overflow-hidden bg-white pt-16">
                    <div
                        id="main-content"
                        className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                    >
                        <Sidebar />
                        {<Outlet />}
                    </div>
                </div>
            </div>
        </div>
    );
}
