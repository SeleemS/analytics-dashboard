"use client"
import { Card, Metric, Text, AreaChart, BadgeDelta, Flex, DeltaType, Grid } from "@tremor/react";

const data = [
  // ... (previous data)
  {
    Month: "Dec 15",
    Views: 1167,
    WatchHours: 2773,
    Subscribers: 4870,
    EstimatedRev: 1930,
  },
  {
    Month: "Dec 16",
    Views: 1141,
    WatchHours: 3909,
    Subscribers: 4474,
    EstimatedRev: 1864,
  },
  {
    Month: "Dec 17",
    Views: 3286,
    WatchHours: 2119,
    Subscribers: 4380,
    EstimatedRev: 1849,
  },
  {
    Month: "Dec 18",
    Views: 4543,
    WatchHours: 4554,
    Subscribers: 4904,
    EstimatedRev: 1644,
  },
  {
    Month: "Dec 19",
    Views: 3510,
    WatchHours: 1079,
    Subscribers: 2925,
    EstimatedRev: 1518,
  },
  // ... (additional days)
  {
    Month: "Dec 20",
    Views: 4451,
    WatchHours: 3170,
    Subscribers: 2031,
    EstimatedRev: 1653,
  },
  {
    Month: "Dec 21",
    Views: 1955,
    WatchHours: 4922,
    Subscribers: 3433,
    EstimatedRev: 1834,
  },
  {
    Month: "Dec 22",
    Views: 1421,
    WatchHours: 2077,
    Subscribers: 4819,
    EstimatedRev: 1661,
  },
  {
    Month: "Dec 23",
    Views: 4451,
    WatchHours: 3170,
    Subscribers: 2031,
    EstimatedRev: 1653,
  },
  {
    Month: "Dec 24",
    Views: 1955,
    WatchHours: 4922,
    Subscribers: 3433,
    EstimatedRev: 1834,
  },
  {
    Month: "Dec 25",
    Views: 1421,
    WatchHours: 2077,
    Subscribers: 4819,
    EstimatedRev: 1661,
  }
];

const categories = [
  {
    title: "Views",
    metric: "1,232,699",
    metricPrev: "809,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "WatchHours",
    metric: "412,348",
    metricPrev: "310,456",
    delta: "18.1%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Subscribers",
    metric: "948",
    metricPrev: "1,082",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
  {
    title: "EstimatedRev",
    metric: "$2,032",
    metricPrev: "$1,889",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
];

const valueFormatter = (number: number) => `$${Intl.NumberFormat("us").format(number).toString()}`;

export default function Example() {
  return (
    <Grid numItemsSm={2} numItemsLg={4} className="gap-8 mt-4">
      {categories.map((item) => (
        <Card key={item.title} className="w-[21vw] shadow-xl" decoration="top" decorationColor="red">
          <Flex alignItems="start">
            <Text className="text-semibold">{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
            <Metric>{item.metric}</Metric>
            <Text>Last 30 days</Text>
          </Flex>
          <AreaChart
            className="mt-6 h-28"
            data={data}
            index="Month"
            valueFormatter={valueFormatter}
            categories={[item.title]}
            colors={["blue"]}
            showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={false}
            showLegend={false}
          />
        </Card>
      ))}
    </Grid>
  );
}