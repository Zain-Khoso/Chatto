// Utils
import { createBrowserRouter } from "react-router-dom";

// Components
import Home from "./pages/Home";

// Router Setup
export default createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);
