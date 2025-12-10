import { BookPlus, ChurchIcon, HomeIcon, LayoutGridIcon } from "lucide-react";
import Link from "next/link";

export function HomeNavbottom() {
  return (
    <div className="h-20">
      <footer className="fixed bottom-0 left-0 right-0 p-4 border-t bg-white">
      <nav className="flex gap-4 max-w-xl mx-auto">
        <Link href={'/'} className="flex-1 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <HomeIcon />
            <span className="font-medium text-sm">Início</span>
          </div>
        </Link>
        <Link href={'/igreja'} className="flex-1 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <ChurchIcon />
            <span className="font-medium text-sm">Igreja</span>
          </div>
        </Link>
        <Link href={'/biblia'} className="flex-1 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <BookPlus />
            <span className="font-medium text-sm">Biblia</span>
          </div>
        </Link>
        <Link href={'/menu'} className="flex-1 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <LayoutGridIcon />
            <span className="font-medium text-sm">Menu</span>
          </div>
        </Link>
      </nav>
    </footer>
    </div>
  )
}