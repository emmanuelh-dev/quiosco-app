import {categorias} from '../data/categorias'
import SidebarLink from './SidebarLink';
import PrimaryButton from '../components/PrimaryButton';
export default function Sidebar() {
    return (
        <aside
            id="sidebar"
            className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
        >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 bg-white space-y-3">
                        {categorias.map(({nombre, id, icono}) => {
                                return(
                                    <SidebarLink key={id} to={icono} icono={icono} categoria={nombre}/>
                                )
                            })}
                        <PrimaryButton className="bg-red-500 hover:bg-red-400">Cancelar Orden</PrimaryButton>
                    </div>
                </div>
            </div>
        </aside>
    );
}
