"use client"
import { Card, Metric, Text, Flex, BadgeDelta, DeltaType, Grid } from "@tremor/react";

const categories = [
  {
    title: "Views",
    metric: "1,312,699",
    metricPrev: "829,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Watch Hours",
    metric: "400,598",
    metricPrev: "445,564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Subscribers",
    metric: "1,072",
    metricPrev: "856",
    delta: "25.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Revenue",
    metric: "1,598",
    metricPrev: "$ 1,564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
];

export default function KeyStats() {
  return (
    <main className="w-full mx-auto">
    <Grid numItemsSm={2} numItemsLg={4} className="gap-6 mt-7">
      {categories.map((item) => (
        <Card key={item.title} decoration="top" decorationColor="cyan">
          <Flex alignItems="start">
            <Text>{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
        </Card>
      ))}
    </Grid>
    </main>
  );
}