import { Card, Metric, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const byCountry = [
  {
    name: "Egypt",
    share: 34,
    amount: "$ 11,715",
  },
  {
    name: "Saudi Arabia",
    share: 24,
    amount: "$ 8,269",
  },
  {
    name: "UAE",
    share: 11,
    amount: "$ 3,790",
  },
];

const byCity = [
  {
    name: "Product C",
    share: 89,
    amount: "$ 84,283",
  },
  {
    name: "Product E",
    share: 79,
    amount: "$ 74,813",
  },
  {
    name: "Product A",
    share: 72,
    amount: "$ 68,184",
  },
];

const locationC = [
  {
    name: "Product A",
    share: 45,
    amount: "$ 27,955",
  },
  {
    name: "Product D",
    share: 35,
    amount: "$ 21,743",
  },
  {
    name: "Product C",
    share: 75,
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
];

export default function Geography() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6 mb-6 justify-start">
      {categories.map((item) => (
        <Card key={item.title} className="w-[30vw]">
          <Text>{item.title}</Text>
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