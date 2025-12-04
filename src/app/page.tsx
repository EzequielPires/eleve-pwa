import { HomeCarousel } from "@/components/home-carousel";
import { HomeNavbottom } from "@/components/home-navbottom";
import { HomeProgramming } from "@/components/home-programming";
import { BookPlus, ChurchIcon, HomeIcon, LayoutGridIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="border-b p-4">
        <nav className="flex justify-between items-center">
          <Image src={'/logo-h.png'} width={200} height={48} alt="Vinde"/>
          <div className="h-12 w-12 rounded-full border flex items-center justify-center"><UserIcon /></div>
        </nav>
      </header>
      <HomeCarousel />
      <HomeProgramming />
      <HomeNavbottom />
    </main>
  );
}
