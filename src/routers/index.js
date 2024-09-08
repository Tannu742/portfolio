import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../layout";
import Home from "../pages/home";

const RouterPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index Component={Home}/>
        </Route>
    )
)
export default RouterPaths;