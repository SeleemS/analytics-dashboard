"use client";
import {
    AreaChart,
    Card,
    Metric,
    TabList,
    Tab,
    TabGroup,
    TabPanels,
    TabPanel,
  } from "@tremor/react";

  type DataPoint = {
    Month: string;
    Visitors: number;
    "Page Views": number;
    "Bounce Rate": number;
  };
  
  const data: DataPoint[] = [
    {
      Month: "Jan 22",
      Visitors: 289,
      "Page Views": 1012,
      "Bounce Rate": 0.5,
    },
    //...
    {
      Month: "Jan 23",
      Visitors: 389,
      "Page Views": 1232,
      "Bounce Rate": 0.51,
    },
  ];
  
  const numberFormatter = (value: number | bigint) => Intl.NumberFormat("us").format(value).toString();

const percentageFormatter = (value: number) =>
  `${Intl.NumberFormat("us")
    .format(value * 100)
    .toString()}%`;
    
function sumArray(array: any[], metric: string) {
  return array.reduce((accumulator: any, currentValue: { [x: string]: any; }) => accumulator + currentValue[metric], 0);
}

  
  export default function HeroChart() {
    return (
        <main className="w-full mb-4 shadow-xl">
        <Card className="p-0" decoration="top" decorationColor="red">
      <TabGroup>
        <TabList>
          <Tab className="p-4 sm:p-6 text-left">
            <p className="text-sm sm:text-base">Visitors</p>
            <Metric className="mt-2 text-inherit">
              {numberFormatter(sumArray(data, "Visitors"))}
            </Metric>
          </Tab>
          <Tab className="p-4 sm:p-6 text-left">
          <p className="text-sm sm:text-base">Page views</p>
            <Metric className="mt-2 text-inherit">
              {numberFormatter(sumArray(data, "Page Views"))}
            </Metric>
          </Tab>
          <Tab className="p-4 sm:p-6 text-left">
          <p className="text-sm sm:text-base">Bounce rate</p>
            <Metric className="mt-2 text-inherit">
              {percentageFormatter(sumArray(data, "Bounce Rate") / data.length)}
            </Metric>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="p-6">
            <AreaChart
              className="h-80 mt-10"
              data={data}
              index="Month"
              categories={["Visitors"]}
              colors={["blue"]}
              valueFormatter={numberFormatter}
              showLegend={false}
              showAnimation={true}
              yAxisWidth={50}
            />
          </TabPanel>
          <TabPanel className="p-6">
            <AreaChart
              className="h-80 mt-10"
              data={data}
              index="Month"
              categories={["Page Views"]}
              colors={["blue"]}
              valueFormatter={numberFormatter}
              showLegend={false}
              yAxisWidth={50}
            />
          </TabPanel>
          <TabPanel className="p-6">
            <AreaChart
              className="h-80 mt-10"
              data={data}
              index="Month"
              categories={["Bounce Rate"]}
              colors={["blue"]}
              valueFormatter={percentageFormatter}
              showLegend={false}
              yAxisWidth={40}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
    </main>
    );
    }