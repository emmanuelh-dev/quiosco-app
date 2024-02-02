import { MdMenuOpen } from "react-icons/md";
import useQuiosco from "../hooks/useQuiosco";

export default function LeftBar() {

    const {handleShowResume, handleShowCategorias} = useQuiosco();
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button onClick={()=>handleShowCategorias()} className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
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
                        <button onClick={()=>handleShowResume()} type="button" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                            <MdMenuOpen className="size-7" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
