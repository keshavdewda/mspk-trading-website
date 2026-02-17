"use client";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">

            {/* Desktop Sidebar */}
            <div className="hidden md:block h-full transition-all duration-300 border-r border-border">
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Top Header */}
                <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 scroll-smooth">
                    {children}
                </main>
            </div>

            {/* Mobile Sidebar */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetContent
                    side="left"
                    className="p-0 w-64 bg-background border-r border-border"
                >
                    <Sidebar collapsed={false} setCollapsed={() => { }} />
                </SheetContent>
            </Sheet>
        </div>
    );
}

