import { CalendarDays, CalendarHeart, ChurchIcon, DollarSignIcon, MicVocalIcon, NewspaperIcon } from "lucide-react";
import Link from "next/link";

export function HomeActions() {
    return (
        <div className="grid grid-cols-3 gap-2 p-4 my-4">
            <Link href='/igreja' className="flex items-center justify-center flex-col bg-gray-100 p-4 py-6 rounded-lg text-gray-800">
                <ChurchIcon />
                <span className="font-semibold">Igreja</span>
            </Link>
            <Link href='/ministerios' className="flex items-center justify-center flex-col bg-blue-100 p-4 py-6 rounded-lg text-blue-800">
                <MicVocalIcon />
                <span className="font-semibold">Ministérios</span>
            </Link>
            <Link href='/publicacoes' className="flex items-center justify-center flex-col bg-green-100 p-4 py-6 rounded-lg text-green-800">
                <NewspaperIcon />
                <span className="font-semibold">Publicações</span>
            </Link>
            <Link href='/agenda' className="flex items-center justify-center flex-col bg-purple-100 p-4 py-6 rounded-lg text-purple-800">
                <CalendarDays />
                <span className="font-semibold">Agenda</span>
            </Link>
            <Link href='/doacao' className="flex items-center justify-center flex-col bg-red-100 p-4 py-6 rounded-lg text-red-800">
                <DollarSignIcon />
                <span className="font-semibold">Doação</span>
            </Link>
            <Link href='/eventos' className="flex items-center justify-center flex-col bg-orange-100 p-4 py-6 rounded-lg text-orange-800">
                <CalendarHeart />
                <span className="font-semibold">Eventos</span>
            </Link>
        </div>
    )
}