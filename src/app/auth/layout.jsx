import React from "react";

export default function AuthLayout({ children }) {
    return (<div className=" sm:grid grid-cols-3">
        <div className="min-h-screen w-full bg-linear-to-br from-cyan-400 to-cyan-700 mx-auto col-span-2 justify-center items-center hidden sm:flex">
            <div className="text-white space-y-4 flex-col justify-center items-center hidden sm:flex">
                <h1 className="text-6xl">
                    Learn With Us
                </h1>
                <p className="text-3xl">
                    We are glad to see you here
                </p>
            </div>
        </div>
        {children}
    </div>
    );
}