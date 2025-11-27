"use client";

import { useState, useEffect } from "react";

export default function useLocalSession() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");

        if (isLoggedIn === 'true') {
            setSession({
                isLoggedIn: true,
                userId,
                email
            });
            console.log(session)
        } else {
            setSession(null);
        }
    }, []);

    return session;
}
