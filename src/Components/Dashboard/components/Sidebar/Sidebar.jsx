import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Card, Typography } from "@material-tailwind/react";

export default function Sidebar({ active, onclose }) {
    const [role] = useState("admin");
    const location = useLocation();

    const groupedMenuItems = [
        {
            section: "Asosiy",
            items: [
                {
                    id: 1,
                    title: "Bosh sahifa",
                    path: "/dashboard",
                    icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 9.75L12 3l9 6.75M4.5 10.5v9.75h5.25V15h4.5v5.25H19.5V10.5" />
                        </svg>
                    )
                },
                {
                    id: 4,
                    title: "Tovarlar",
                    path: "/box",
                    icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M20.25 7.5v9a2.25 2.25 0 01-2.25 2.25h-12A2.25 2.25 0 013.75 16.5v-9A2.25 2.25 0 016 5.25h12A2.25 2.25 0 0120.25 7.5z" />
                        </svg>
                    )
                },
                {
                    id: 4,
                    title: "Sotuv tarixi",
                    path: "/sell/credit",
                    icon: (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.41 11.41l-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5S7.33 8 6.5 8"></path></svg>
                    )
                },
                // {
                //     id: 2,
                //     title: "Mijozlar",
                //     path: "/order",
                //     icon: (
                //         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"
                //             viewBox="0 0 24 24">
                //             <path strokeLinecap="round" strokeLinejoin="round"
                //                 d="M16.5 12a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zM3 21v-1.5a4.5 4.5 0 014.5-4.5h9a4.5 4.5 0 014.5 4.5V21" />
                //         </svg>
                //     )
                // },
                // {
                //     id: 5,
                //     title: "Buyrtma qutisi",
                //     path: "/orderbox",
                //     icon: (
                //         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"
                //             viewBox="0 0 24 24">
                //             <path strokeLinecap="round" strokeLinejoin="round"
                //                 d="M4.5 6.75L12 3l7.5 3.75M3 10.5l9 4.5 9-4.5M3 14.25l9 4.5 9-4.5" />
                //         </svg>
                //     )
                // }
            ]
        },
        {
            section: "Moliya",
            items: [
                {
                    id: 6,
                    title: "Umumiy hisobot",
                    path: "/benefits",
                    icon: (
                        <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M8 11.75V7.5q0-.625.438-1.062T9.5 6t1.063.438T11 7.5v4.25q0 .625-.437 1.063T9.5 13.25t-1.062-.437T8 11.75m5-.225V3.5q0-.625.438-1.062T14.5 2t1.063.438T16 3.5v8.025q0 .75-.462 1.125t-1.038.375t-1.037-.375T13 11.525m-10 3.45V11.5q0-.625.438-1.062T4.5 10t1.063.438T6 11.5v3.475q0 .75-.462 1.125t-1.038.375t-1.037-.375T3 14.975m2.4 6.075q-.65 0-.913-.612T4.7 19.35l4.1-4.1q.275-.275.663-.3t.687.25L13 17.65l5.6-5.6H18q-.425 0-.712-.288T17 11.05t.288-.712t.712-.288h3q.425 0 .713.288t.287.712v3q0 .425-.288.713T21 15.05t-.712-.288T20 14.05v-.6l-6.25 6.25q-.275.275-.663.3t-.687-.25L9.55 17.3L6.1 20.75q-.125.125-.312.213t-.388.087"></path></svg>
                    )
                },
                {
                    id: 7,
                    title: "Tilla hisoboti",
                    path: "/debtors",
                    icon: (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" d="M24 5.5c-1.68 0-3.343.154-4.567.303c-1.757.215-3.302 1.347-3.926 3.085c-.676 1.883-1.613 5.092-2.203 9.626c-.307 2.36 1.362 4.516 3.777 4.722c1.618.137 3.924.264 6.918.264s5.3-.127 6.919-.264c2.415-.206 4.084-2.363 3.777-4.722c-.59-4.534-1.527-7.743-2.203-9.626c-.624-1.738-2.17-2.87-3.926-3.085c-1.224-.15-2.886-.303-4.567-.303M12.5 24.5c-1.68 0-3.343.154-4.567.303c-1.757.215-3.302 1.347-3.926 3.085c-.676 1.883-1.613 5.092-2.203 9.626c-.307 2.36 1.362 4.516 3.777 4.722c1.618.137 3.924.264 6.918.264s5.3-.127 6.919-.264c2.415-.206 4.084-2.363 3.777-4.722c-.59-4.534-1.527-7.743-2.203-9.626c-.624-1.738-2.17-2.87-3.926-3.085c-1.224-.15-2.886-.303-4.567-.303m23.001 0c-1.68 0-3.343.154-4.567.303c-1.757.215-3.302 1.347-3.926 3.085c-.676 1.883-1.613 5.092-2.203 9.626c-.307 2.36 1.362 4.516 3.777 4.722c1.618.137 3.924.264 6.918.264s5.3-.127 6.919-.264c2.415-.206 4.084-2.363 3.777-4.722c-.59-4.534-1.527-7.743-2.203-9.626c-.624-1.738-2.17-2.87-3.926-3.085c-1.224-.15-2.886-.303-4.567-.303"></path></svg>)
                },
                {
                    id: 7,
                    title: "Kumush hisoboti",
                    path: "/order",
                    icon: (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" d="M24 5.5c-1.68 0-3.343.154-4.567.303c-1.757.215-3.302 1.347-3.926 3.085c-.676 1.883-1.613 5.092-2.203 9.626c-.307 2.36 1.362 4.516 3.777 4.722c1.618.137 3.924.264 6.918.264s5.3-.127 6.919-.264c2.415-.206 4.084-2.363 3.777-4.722c-.59-4.534-1.527-7.743-2.203-9.626c-.624-1.738-2.17-2.87-3.926-3.085c-1.224-.15-2.886-.303-4.567-.303M12.5 24.5c-1.68 0-3.343.154-4.567.303c-1.757.215-3.302 1.347-3.926 3.085c-.676 1.883-1.613 5.092-2.203 9.626c-.307 2.36 1.362 4.516 3.777 4.722c1.618.137 3.924.264 6.918.264s5.3-.127 6.919-.264c2.415-.206 4.084-2.363 3.777-4.722c-.59-4.534-1.527-7.743-2.203-9.626c-.624-1.738-2.17-2.87-3.926-3.085c-1.224-.15-2.886-.303-4.567-.303m23.001 0c-1.68 0-3.343.154-4.567.303c-1.757.215-3.302 1.347-3.926 3.085c-.676 1.883-1.613 5.092-2.203 9.626c-.307 2.36 1.362 4.516 3.777 4.722c1.618.137 3.924.264 6.918.264s5.3-.127 6.919-.264c2.415-.206 4.084-2.363 3.777-4.722c-.59-4.534-1.527-7.743-2.203-9.626c-.624-1.738-2.17-2.87-3.926-3.085c-1.224-.15-2.886-.303-4.567-.303"></path></svg>)
                },
                {
                    id: 8,
                    title: "Xarajatlar",
                    path: "/expenses",
                    icon: (
                        <svg className="w-6 h-6" viewBox="0 0 16 16"><path fill="currentColor" d="M1 4.25C1 3.56 1.56 3 2.25 3h9.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-9.5C1.56 11 1 10.44 1 9.75zm3 .25V4H3v.5a.5.5 0 0 1-.5.5H2v1h.5A1.5 1.5 0 0 0 4 4.5M9 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></path></svg>
                    )
                }
            ]
        }
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <Card className="h-[95%] w-[280px] fixed top-[15px] left-[15px] z-50 shadow-xl bg-white/30 backdrop-blur-md border border-white/20 px-6 py-6 overflow-y-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-md flex items-center justify-center text-black font-bold text-xl">
                            St
                        </div>
                        <span className="text-xl font-semibold text-gray-800"></span>
                    </div>
                    <div className="flex flex-col gap-6">
                        {groupedMenuItems.map((group) => (
                            <div key={group.section}>
                                <Typography variant="small" color="gray" className="mb-2 uppercase font-medium text-xs tracking-widest">
                                    {group.section}
                                </Typography>
                                <div className="flex flex-col gap-2">
                                    {group.items.map((item) => (
                                        <NavLink
                                            key={item.id}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 
                                                ${isActive
                                                    ? "bg-white/80 text-blue-600 font-semibold shadow-md"
                                                    : "text-gray-700 hover:bg-white/40 hover:text-blue-600"}`
                                            }
                                        >
                                            <span className="w-6 h-6">{item.icon}</span>
                                            <span className="text-sm">{item.title}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[49] transition-opacity duration-300 ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={onclose}
            />

            {/* Mobile Sidebar */}
            <div
                className={`md:hidden fixed top-0 left-0 h-screen w-[280px] z-50 transform transition-transform duration-300 ease-in-out ${active ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Card
                    className="h-full w-full shadow-xl bg-white/95 backdrop-blur-md border border-white/20 px-6 py-6 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-md flex items-center justify-center text-black font-bold text-xl">
                            M
                        </div>
                        <span className="text-xl font-semibold text-gray-800">Moni Credits</span>
                    </div>
                    <div className="flex flex-col gap-6">
                        {groupedMenuItems.map((group) => (
                            <div key={group.section}>
                                <Typography variant="small" color="gray" className="mb-2 uppercase font-medium text-xs tracking-widest">
                                    {group.section}
                                </Typography>
                                <div className="flex flex-col gap-2">
                                    {group.items.map((item) => (
                                        <div key={item.id} onClick={onclose}>
                                            <NavLink
                                                to={item.path}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 
                                                    ${isActive
                                                        ? "bg-white/80 text-blue-600 font-semibold shadow-md"
                                                        : "text-gray-700 hover:bg-white/40 hover:text-blue-600"}`
                                                }
                                            >
                                                <span className="w-6 h-6">{item.icon}</span>
                                                <span className="text-sm">{item.title}</span>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    );
}
