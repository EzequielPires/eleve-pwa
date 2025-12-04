import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar } from "lucide-react";

export function HomeProgramming() {
    return (
        <div className="flex flex-col gap-4 pt-10">
            <div className="flex items-center justify-between px-4">
                <h4 className="text-lg font-semibold">Programação</h4>
                <Link className="text-red-600 font-semibold" href={'/programacao'}>Ver mais</Link>
            </div>
            <Carousel className="w-full">
            <CarouselContent>
                {Array.from({ length: 11 }).map((_, index) => (
                    <CarouselItem key={index} className={`max-w-[320px]`}>
                        <div className={`${index == 0 ? 'ml-4' : index == 10 ? 'mr-4' : ''} py-1`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Culto de Celebração</CardTitle>
                                    <CardDescription className="flex gap-2 items-center text-gray-900">
                                        <Calendar size={18} /> <span className="font-medium">28/08/2025 às 19:30</span>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        </div>
    )
}