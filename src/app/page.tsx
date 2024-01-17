import Image from 'next/image'
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import KeyStats from '@/components/keystats';
import HeroChart from '@/components/herochart';
import Audience from '@/components/audience';
import RecentVideos from '@/components/recentvideos';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-5 bg-slate-800">
      <KeyStats />
      <div className="flex flex-row my-8 justify-center w-full gap-10">
      <Audience />
      <RecentVideos/>
      </div>
      <HeroChart />
    </main>
  )
}
