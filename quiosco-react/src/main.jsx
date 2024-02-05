import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QuioscoProvider } from "./context/QuioscoProvider";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QuioscoProvider>
            <Toaster/>
            <RouterProvider router={router} />
        </QuioscoProvider>
    </React.StrictMode>
);
