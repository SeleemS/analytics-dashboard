import Image from 'next/image'
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import KeyStats from '@/components/keystats';
import HeroChart from '@/components/herochart';
import Audience from '@/components/audience';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-5">
      <KeyStats />
      <Audience />
      <HeroChart />
    </main>
  )
}
