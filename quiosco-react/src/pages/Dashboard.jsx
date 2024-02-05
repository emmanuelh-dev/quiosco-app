import useSWR from "swr";
import axiosInstance from "../config/axios";
import PedidosCard from "../components/PedidosCard";

export default function Dashboard() {
    const token = localStorage.getItem("AUTH_TOKEN");
    const fetcher = () =>
        axiosInstance("/pedidos", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    const { data, error, isLoading } = useSWR("/pedidos", fetcher, {refreshInterval: 1000});
    if (isLoading) return <p className="pt-6 px-4">Cargando...</p>;
    if (error) return <p className="pt-6 px-4">Hubo un error al cargar los pedidos</p>;

    const {data : pedidos} = data.data;
    console.log(pedidos);
    return (
        <main>
            <div className="pt-6 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                {pedidos.map((pedido, index) => (
                    <PedidosCard key={index} pedido={pedido} />
                ))}
                </div>
            </div>
        </main>
    );
}
