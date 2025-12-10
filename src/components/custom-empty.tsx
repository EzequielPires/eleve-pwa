'use client'

import { InfoIcon, RefreshCcwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { useRouter } from "next/navigation"

export function CustomEmpty({ title, description }: { title: string, description?: string }) {
    const router = useRouter();

    return (
        <Empty className="from-muted/50 to-background h-full bg-gradient-to-b from-30%">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <InfoIcon />
                </EmptyMedia>
                <EmptyTitle>{title}</EmptyTitle>
                {description && <EmptyDescription>{description}</EmptyDescription>}
            </EmptyHeader>
            <EmptyContent>
                <Button variant="outline" size="sm" onClick={() => router.refresh()}>
                    <RefreshCcwIcon />
                    Recarregar
                </Button>
            </EmptyContent>
        </Empty>
    )
}
