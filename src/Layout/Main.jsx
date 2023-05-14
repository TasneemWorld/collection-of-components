import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Nabvar from "../Pages/Share/Nabvar/Nabvar";

const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;