import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { AspectRatio } from "../ui/aspect-ratio"

export function HomeCarousel() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {Array.from({ length: 11 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-2">
                            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                                <Image
                                    src={`/banners/${index + 1}.png`}
                                    alt="Photo by Drew Beamer"
                                    fill
                                    className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
