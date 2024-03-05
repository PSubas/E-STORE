import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/400-italic.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
// import HomePage from "./pages/HomePage.jsx";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <AllProducts />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={myRouter} />
        </Provider>
    </React.StrictMode>
);
