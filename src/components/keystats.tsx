import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

export default function KeyStats() {
  return (
      <div className="flex flex-row gap-10">
    <Card className="max-w-xs mx-auto">
      <Text>Views</Text>
      <Metric>1,341,758</Metric>
      <Flex className="mt-4">
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar value={32} className="mt-2" />
    </Card>
    <Card className="max-w-xs mx-auto">
      <Text>Watch Hours</Text>
      <Metric>255,231</Metric>
      <Flex className="mt-4">
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar value={32} className="mt-2" />
    </Card>
    <Card className="max-w-xs mx-auto">
      <Text>Subscribers</Text>
      <Metric>1,465</Metric>
      <Flex className="mt-4">
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar value={32} className="mt-2" />
    </Card>
    <Card className="max-w-xs mx-auto">
      <Text>Revenue</Text>
      <Metric>$ 1365</Metric>
      <Flex className="mt-4">
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar value={32} className="mt-2" />
    </Card>
</div>
  );
}