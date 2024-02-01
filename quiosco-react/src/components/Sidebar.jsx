import SidebarLink from './SidebarLink';
import PrimaryButton from '../components/PrimaryButton';
import useQuiosco from '../hooks/useQuiosco';
export default function Sidebar() {
    const {categorias, categoriaActiva, showCategories} = useQuiosco();
    return (
        <aside
            id="sidebar"
            className={`fixed  z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${!showCategories && 'hidden'}`}
            aria-label="Sidebar"
        >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 bg-white space-y-3">
                        {categorias.map((categoria) => {
                                return(
                                    <SidebarLink key={categoria.id} categoria={categoria} active={categoria.id === categoriaActiva.id}/>
                                )
                            })}
                        <PrimaryButton className="bg-red-500 hover:bg-red-400">Cancelar Orden</PrimaryButton>
                    </div>
                </div>
            </div>
        </aside>
    );
}
