import {Outlet} from 'react-router-dom';
export default function Default() {
    return (
        <div>
            <div>
                <div className="flex overflow-hidden bg-white pt-16">
                    <div
                        id="main-content"
                        className="h-full w-full bg-white relative overflow-y-auto py-16"
                    >
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}
