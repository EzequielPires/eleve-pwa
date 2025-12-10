import { AppBar } from "@/components/app-bar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertService } from "@/lib/services/alert.service";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default async function Page() {
    const data = await AlertService.getAll();

    return (
        <div>
            <AppBar title="Avisos" />
            <div className="p-4 flex flex-col gap-4">
                {data.map(e => <Link key={e.id} href={'/avisos'}>
                    <Card>
                        <CardHeader>
                            <CardTitle>{e.title}</CardTitle>
                            <CardDescription className="text-gray-900">{e.content}</CardDescription>
                            <span className="flex gap-2 items-center text-gray-900">
                                <Calendar size={18} /> <span className="font-medium text-sm">28/08/2025 às 19:30</span>
                            </span>
                        </CardHeader>
                    </Card>
                </Link>)}
            </div>
        </div>
    )
}