"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import './style.css';

const navLink = [
    { name: "Register", href: '/register' },
    { name: "Login", href: '/login' },
    { name: "Forgot Password", href: '/forget-password' },
]
export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <>
            <h2>Outer layout for login/register/forget-password</h2>
            <div>
                {navLink.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link href={link.href} key={link.name}
                            className={isActive ? "font-bold mr-4" : 'text-blue-500 mr-4'}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            {children}
        </>
    )
}