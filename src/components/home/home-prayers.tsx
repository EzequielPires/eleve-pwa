import Link from "next/link";
import { PrayerCard } from "../prayer-card";
import { PrayerService } from "@/lib/services/prayer.service";
import { Card, CardContent, CardHeader } from "../ui/card";

export async function HomePrayers() {
    const prayers = await PrayerService.getAll();

    if (prayers.length == 0) return null;

    return (
        <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center justify-between px-4">
                <h4 className="text-lg font-semibold">Pedidos de oração</h4>
                <Link className="text-red-600 font-semibold" href={'/oracoes'}>Ver mais</Link>
            </div>
            <div className="flex flex-col gap-4 px-4">
                {prayers.map(e => <PrayerCard key={e.id} />)}
            </div>
        </div>
    )
}

export type HomePrayersSkeletonProps = {
    count?: number;
};


export default function HomePrayersSkeleton({ count = 3 }: HomePrayersSkeletonProps) {
    return (
        <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <div className="h-6 w-48 rounded-md bg-muted/70 animate-pulse" />
                </div>
                <div className="h-5 w-20 rounded-md bg-muted/70 animate-pulse" />
            </div>


            <div className="flex flex-col gap-4 px-4">
                {Array.from({ length: count }).map((_, i) => (
                    <Card key={i} className="shadow-sm">
                        <CardHeader className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-muted/70 animate-pulse" />
                                <div className="flex flex-col gap-2">
                                    <div className="h-4 w-36 rounded-md bg-muted/70 animate-pulse" />
                                    <div className="h-3 w-24 rounded-md bg-muted/70 animate-pulse" />
                                </div>
                            </div>
                            <div className="h-6 w-6 rounded-md bg-muted/70 animate-pulse" />
                        </CardHeader>


                        <CardContent>
                            <div className="h-4 w-full rounded-md bg-muted/70 animate-pulse mb-2" />
                            <div className="h-4 w-5/6 rounded-md bg-muted/70 animate-pulse" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}