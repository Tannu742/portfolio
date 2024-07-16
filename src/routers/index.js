import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../layout";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Skills from "../pages/skills";
import Contact from "../pages/contact";

const RouterPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/services" Component={Services}/>
            <Route path="/skills" Component={Skills}/>
            <Route path="/contact" Component={Contact}/>
        </Route>
    )
)
export default RouterPaths;