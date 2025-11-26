import React from "react";

export default function AuthLayout({ children }) {
    return (<div className=" md:grid grid-cols-2 xl:grid-cols-3">
        <div className="min-h-screen w-full bg-linear-to-br from-cyan-200 to-indigo-700 mx-auto xl:col-span-2 justify-center items-center hidden md:flex">
            <div className="text-white space-y-4 flex-col justify-center items-center hidden sm:flex p-2">
                <h1 className="sm:text-4xl md:text-4xl xl:text-6xl font-bold">
                    Learn With Us
                </h1>
                <p className="text-2xl">
                    We are glad to see you here
                </p>
            </div>
        </div>
        {children}
    </div>
    );
}