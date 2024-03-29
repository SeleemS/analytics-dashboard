import Image from 'next/image'
import KeyStats from '@/components/keystats';
import HeroChart from '@/components/herochart';
import Audience from '@/components/audience';
import RecentVideos from '@/components/recentvideos';
import Geography from '@/components/geography';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-5">
      <KeyStats />
      <div className="flex flex-row my-8 justify-center w-full gap-8">
      <Audience />
      <RecentVideos/>
      </div>
      <Geography/>
      <HeroChart />
    </main>
  )
}
