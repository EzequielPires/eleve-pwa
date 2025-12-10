import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeAppBar() {
    return (
        <header className="border-b p-4">
            <nav className="flex justify-between items-center max-w-xl mx-auto">
                <Image src={'/logo-h.png'} width={200} height={48} alt="Vinde" />
                <Link href={'/entrar'} className="cursor-pointer h-12 w-12 rounded-full border flex items-center justify-center"><UserIcon /></Link>
            </nav>
        </header>
    )
}