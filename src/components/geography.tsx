import { Card, Metric, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const byCountry = [
  {
    name: "Egypt",
    share: 46,
    amount: "$ 11,715",
  },
  {
    name: "Saudi Arabia",
    share: 28,
    amount: "$ 8,269",
  },
  {
    name: "UAE",
    share: 22,
    amount: "$ 3,790",
  },
  {
    name: "Yemen",
    share: 14,
    amount: "$ 3,790",
  },
  {
    name: "Morocco",
    share: 7,
    amount: "$ 3,790",
  },
  {
    name: "Jordan",
    share: 5,
    amount: "$ 3,790",
  },
];

const byCity = [
  {
    name: "Cairo",
    share: 89,
    amount: "$ 84,283",
  },
  {
    name: "New Cairo",
    share: 79,
    amount: "$ 74,813",
  },
  {
    name: "Giza",
    share: 72,
    amount: "$ 68,184",
  },
  {
    name: "Abu Dhabi",
    share: 89,
    amount: "$ 84,283",
  },
  {
    name: "Riyadh",
    share: 79,
    amount: "$ 74,813",
  },
  {
    name: "Dubai",
    share: 72,
    amount: "$ 68,184",
  },
];

const topVideos = [
  {
    name: "Video 1",
    share: 75,
    amount: "$ 27,955",
  },
  {
    name: "Video 2",
    share: 66,
    amount: "$ 21,743",
  },
  {
    name: "Video 3",
    share: 52,
    amount: "$ 46,592",
  },
  {
    name: "Video 4",
    share: 50,
    amount: "$ 27,955",
  },
  {
    name: "Video 5",
    share: 42,
    amount: "$ 21,743",
  },
  {
    name: "Video 6",
    share: 31,
    amount: "$ 46,592",
  },
];

const categories = [
  {
    title: "Views • By Country",
    data: byCountry,
  },
  {
    title: "Views • By City",
    data: byCity,
  },
  {
    title: "Top Videos • Last 28 Days",
    data: topVideos,
  },
];

export default function Geography() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6 mb-6 justify-start">
      {categories.map((item) => (
        <Card key={item.title} className="w-[30vw] shadow-xl" decoration="top" decorationColor="red">
          <Text className="font-semibold">{item.title}</Text>
          <List className="mt-4">
            {item.data.map((product) => (
              <ListItem key={product.name}>
                <div className="w-full">
                  <Text>{product.name}</Text>
                  <ProgressBar
                    value={product.share}
                    label={`${product.share}%`}
                    tooltip={product.amount}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </Grid>
  );
}