import { AppBar } from "@/components/app-bar";
import { PublicationCard } from "@/components/publication-card";

export default function Page() {
    return (
        <div>
            <AppBar title="Publicações" />
            <div className="flex flex-col gap-4 p-4">
                <PublicationCard />
                <PublicationCard />
                <PublicationCard />
                <PublicationCard />
            </div>
        </div>
    )
}