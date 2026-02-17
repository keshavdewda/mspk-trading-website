"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Market", href: "/market" },
        { label: "Plans", href: "/plans" },
        { label: "About", href: "/about" },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">

            <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center bg-white p-2 rounded-md">
                    <Image
                        src="/images/logo.png"
                        alt="MSPK"
                        width={140}
                        height={50}
                        className="h-10 w-auto border border-yellow-400"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href)

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    isActive
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    <div className="w-10 flex justify-center">
                        <ModeToggle />
                    </div>

                    <Link href="/login" className="hidden sm:block">
                        <Button variant="ghost" size="sm">
                            Log In
                        </Button>
                    </Link>

                    <Link href="/trial">
                        <Button size="sm">
                            Get Started
                        </Button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-muted"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Centered */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border bg-background px-6 py-4">
                    <div className="flex flex-col items-center space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link href="/login" onClick={() => setMobileOpen(false)} className="w-full max-w-xs">
                            <Button variant="ghost" className="w-full">
                                Log In
                            </Button>
                        </Link>

                        <Link href="/trial" onClick={() => setMobileOpen(false)} className="w-full max-w-xs">
                            <Button className="w-full">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
