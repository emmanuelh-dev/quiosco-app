import LeftBar from "../components/LeftBar";
import Sidebar from "../components/Sidebar";
import {Outlet} from 'react-router-dom';
export default function Default() {
    return (
        <div>
            <div>
                <LeftBar/>
                <div className="flex overflow-hidden bg-white pt-16">
                    <Sidebar/>
                    <div
                        id="main-content"
                        className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                    >
                        {<Outlet/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
