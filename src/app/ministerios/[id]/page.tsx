import { AppBar } from "@/components/app-bar";
import { MinistryBackground } from "@/components/ministry-background";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MinistryService } from "@/lib/services/ministry.service";
import { use } from "react";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await MinistryService.getOneById(id);

    console.log(data)

    return (
        <div>
            <MinistryBackground ministry={data} />
            <div className="p-4 pt-0 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">{data.name}</h2>
                <p>{data.description}</p>
                {data.responsible &&
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-medium">Responsável pelo ministério</h4>
                        <Card>
                            <CardHeader>
                                <div className="flex gap-4 items-start">
                                    <Avatar>
                                        <AvatarImage />
                                        <AvatarFallback>EZ</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-1">
                                        <CardTitle>{data.responsible.name}</CardTitle>
                                        <CardDescription>{data.responsible.phone}</CardDescription>
                                        <CardDescription>{data.responsible.email}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                }
            </div>
        </div>
    )
}