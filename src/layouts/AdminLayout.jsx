import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/components/Sidebar/Sidebar";
import AdminHeader from "../Components/Dashboard/components/Header/AdminHeader";
import { useState } from "react";



export default function AdminLayout() {

    const [active, setActive] = useState(false)

    return (
        <div className="flex w-[100%] overflow-hidden  bg-[#FAFAFA] relative">
            <Sidebar active={active} onclose={()=>setActive(false)}/>
            <div className="md:ml-[320px] mt-[10px] w-full min-h-screen">
                <AdminHeader active={() => setActive(!active)} />
                <Outlet />
            </div>
        </div>
    )
}