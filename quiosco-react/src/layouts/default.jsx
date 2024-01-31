import LeftBar from "../components/LeftBar";
import {Outlet} from 'react-router-dom';
import Sidebar from "../components/Sidebar";
export default function Default() {
    return (
        <div>
            <div>
                <LeftBar/>
                <div className="flex overflow-hidden bg-white pt-16">
                    <div
                        id="main-content"
                        className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                    >
                        <Sidebar/>
                        {<Outlet/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
