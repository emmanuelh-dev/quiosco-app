import LeftBar from "../components/LeftBar";
import {Outlet} from 'react-router-dom';
export default function Default() {
    return (
        <div>
            <div>
                <LeftBar/>
                <div className="flex overflow-hidden bg-white pt-16">
                    <div
                        id="main-content"
                        className="h-full w-full bg-white relative overflow-y-auto"
                    >
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}
