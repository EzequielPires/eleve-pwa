import { AppBar } from "@/components/app-bar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MinistryService } from "@/lib/services/ministry.service";
import Link from "next/link";

export default async function Page() {
    const data = await MinistryService.getAll();

    return (
        <div>
            <AppBar title="Ministérios"/>
            <div className="p-4 flex flex-col gap-4">
                {data.map(e => <Link key={e.id} href={`/ministerios/${e.id}`}>
                    <Card>
                        <CardHeader>
                            <CardTitle>{e.name}</CardTitle>
                            <CardDescription className="text-gray-900 line-clamp-2">{e.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>)}
            </div>
        </div>
    )
}