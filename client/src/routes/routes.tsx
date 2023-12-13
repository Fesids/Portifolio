import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages/Index";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <Index/>
    }
])