import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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
                      <Link to={'/admin/productos'}>Productos</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
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
