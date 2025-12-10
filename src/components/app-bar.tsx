'use client'

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function AppBar({ title, children }: { title: string, children?: React.ReactNode }) {
    const router = useRouter()

    return (
        <div className="h-20">
            <header className="h-20 border-b fixed top-0 left-0 right-0 bg-white">
                <nav className="flex gap-4 p-4 items-center h-full max-w-xl mx-auto">
                    <Button size={'icon-lg'} variant={"outline"} onClick={() => router.back()}>
                        <ArrowLeft />
                    </Button>
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <div className="flex-1"></div>
                    {children}
                </nav>
            </header>
        </div>
    )
}