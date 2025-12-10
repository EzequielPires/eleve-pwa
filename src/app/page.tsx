import { HomeActions } from "@/components/home/home-actions";
import { HomeAlerts, HomeAlertsSkeleton } from "@/components/home/home-alerts";
import { HomeAppBar } from "@/components/home/home-app-bar";
import { HomeCarousel } from "@/components/home/home-carousel";
import { HomeNavbottom } from "@/components/home/home-navbottom";
import HomePrayersSkeleton, { HomePrayers } from "@/components/home/home-prayers";
import { HomeProgramming, HomeProgrammingSkeleton } from "@/components/home/home-programming";
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <HomeAppBar />
      <div className="max-w-xl w-full mx-auto">
        <HomeCarousel />
        <Suspense fallback={<HomeProgrammingSkeleton />}>
          <HomeProgramming />
        </Suspense>
        <Suspense fallback={<HomeAlertsSkeleton />}>
          <HomeAlerts />
        </Suspense>
        <HomeActions />
        <Suspense fallback={<HomePrayersSkeleton />}>
          <HomePrayers />
        </Suspense>
      </div>
      <HomeNavbottom />
    </main>
  );
}
