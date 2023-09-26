import { Outlet } from "react-router-dom";
import Navbar from "../header/navbar/Navbar";

const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="max-w-[1300px] mx-auto">
            <Outlet></Outlet>

            </div>

        </div>
    );
};

export default MainLayout;