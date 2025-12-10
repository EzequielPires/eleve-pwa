'use client'

import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { ArrowLeft, ArrowRight, CalendarDays, CalendarDaysIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export function ChurchBackground() {
    const router = useRouter()

    return (
        <div className="relative">
            <AspectRatio ratio={16 / 14} className="bg-muted">
                <Image
                    src={`/igreja-bg.jpg`}
                    alt="Photo by Drew Beamer"
                    fill
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </AspectRatio>
            <div className="absolute z-50 top-0 left-0 right-0 p-4 flex items-center gap-8">
                <Button size={'icon-lg'} variant={"outline"} onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                <h1 className="text-lg font-semibold text-white">Comunidade Evangélica Vinde</h1>
            </div>
            <div className="w-full h-full bg-black/50 absolute z-10 top-0 left-0 right-0 border-0"></div>
            <div className="w-full absolute left-0 right-0 border-0 bottom-16 z-50 flex items-center justify-center">
                <Link href={'/programacao'}>
                    <Button size={'lg'}>
                        <CalendarDaysIcon />
                        Acessar programação da igreja
                        <ArrowRight />
                    </Button>
                </Link>
            </div>
            <div className="w-full bg-white absolute left-0 right-0 border-0 bottom-0 h-8 rounded-t-2xl z-50"></div>
        </div>
    )
}