'use client'
import { SessionProvider } from 'next-auth/react'
import Navbar from './Navbar/Navbar'

export default function ClientWrapper({ children }) {
    return (
        <SessionProvider>
            <Navbar />
            {/* <div className="sm:mx-20 mx-6">
                {children}
            </div> */}
        </SessionProvider>
    )
}
