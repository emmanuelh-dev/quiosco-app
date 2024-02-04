import { useEffect } from "react";
import axiosInstance from "../config/axios";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

export const useAuth = ({ middleware, url }) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    const navigate = useNavigate();
    const {
        data: user,
        error,
        mutate,
    } = useSWR("/user", () =>
        axiosInstance("/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.data)
            .catch((err) => {
                throw Error(error?.response?.data?.errors);
            })
    );
    const login = async (datos, setErrores) => {
        try {
            const { data } = await axiosInstance.post("/login", datos);
            localStorage.setItem("AUTH_TOKEN", data.token);
            setErrores([]);
            await mutate();
        } catch (error) {
            console.error(error);
            setErrores(Object.values(error.response.data.errors));
        }
    };
    useEffect(() => {
        if (middleware === "guest" && url && user) {
            navigate(url);
        }
        if (middleware === "auth" && error) {
            navigate("/auth/login");
        }
    }, [user, error]);

    const register = () => {};
    const logout = async () => {
        try {
            await axiosInstance.post("/logout",null,{ headers: { Authorization: `Bearer ${token}`, },} );
            localStorage.removeItem('AUTH_TOKEN');
            await mutate(null);
        } catch (error) {
            console.error(error);
        }
    };
    return {
        login,
        register,
        logout,
        user,
        error,
    };
};
