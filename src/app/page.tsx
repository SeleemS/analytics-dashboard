import Image from 'next/image'
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import KeyStats from '@/components/keystats';
import HeroChart from '@/components/herochart';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <KeyStats />
      <HeroChart />
    </main>
  )
}
