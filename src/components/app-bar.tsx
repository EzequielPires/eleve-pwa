'use client'

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function AppBar({title}: {title: string}) {
    const router = useRouter()

    return (
        <div>
            <header className="h-20 border-b fixed top-0 left-0 right-0 flex gap-4 p-4 items-center">
                <Button size={'icon-lg'} variant={"outline"} onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                <h1>{title}</h1>
            </header>
        </div>
    )
}