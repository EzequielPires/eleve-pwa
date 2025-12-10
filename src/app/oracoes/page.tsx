import { AppBar } from "@/components/app-bar";
import { CustomEmpty } from "@/components/custom-empty";
import { PrayerCard } from "@/components/prayer-card";
import { Button } from "@/components/ui/button";
import { PrayerService } from "@/lib/services/prayer.service";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Page() {
    const prayers = await PrayerService.getAll();
    return (
        <div>
            <AppBar title="Pedidos de oração">
                <Link href={'/oracoes/adicionar'}>
                <Button size={"icon-lg"}><PlusIcon /></Button>
                </Link>
            </AppBar>
                {prayers.length == 0 && <CustomEmpty title="Nenhum resultado encontrado"/>}
            <div className="flex flex-col gap-4 px-4">
                {prayers.map(e => <PrayerCard key={e.id} />)}
            </div>
        </div>
    )
}