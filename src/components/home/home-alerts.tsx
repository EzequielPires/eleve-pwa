import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Alert } from "@/lib/models/alert";

export async function HomeAlerts() {
    const {data}: {data: Alert[]} = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}alerts`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
        }
      }).then(async res => await res.json());

      console.log(data)

    return (
        <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center justify-between px-4">
                <h4 className="text-lg font-semibold">Avisos</h4>
                <Link className="text-red-600 font-semibold" href={'/avisos'}>Ver mais</Link>
            </div>
            <Carousel className="w-full">
                <CarouselContent>
                    {data.map((e, index) => (
                        <CarouselItem key={index} className={`max-w-[320px]`}>
                            <div className={`${index == 0 ? 'ml-4' : index == data.length - 1 ? 'mr-4' : ''} py-1`}>
                                <Link href={'/avisos'}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{e.title}</CardTitle>
                                            <CardDescription className="text-gray-900">{e.content}</CardDescription>
                                            <span className="flex gap-2 items-center text-gray-900">
                                                <Calendar size={18} /> <span className="font-medium text-sm">28/08/2025 às 19:30</span>
                                            </span>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export function HomeAlertsSkeleton() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="flex items-center justify-between px-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-20" />
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {[1, 2, 3].map((i) => (
            <CarouselItem key={i} className="max-w-[320px]">
              <div className={`${i === 1 ? "ml-4" : i === 3 ? "mr-4" : ""} py-1`}>
                <div className="border rounded-lg p-4 space-y-3">
                  <Skeleton className="h-5 w-52" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}