import { Card, List, ListItem, ProgressBar, Text, Title, Grid } from "@tremor/react";

const ageGroups = [
  {
    ageGroup: "18-24",
    percentage: 35,
  },
  {
    ageGroup: "25-34",
    percentage: 39,
  },
  {
    ageGroup: "35-44",
    percentage: 22,
  },
  {
    ageGroup: "45-54",
    percentage: 15,
  },
  {
    ageGroup: "55-64",
    percentage: 10,
  },
];

export default function AgeBar() {
  return (
    <Grid numItemsSm={2} numItemsLg={1} className="gap-6">
      <Card className="max-w-lg" decoration={top} decorationColor="indigo">
        <Title>Age Groups</Title>
        <List className="mt-4">
          {ageGroups.map((group) => (
            <ListItem key={group.ageGroup}>
              <div className="w-full">
                <Text>{group.ageGroup}</Text>
                <ProgressBar
                  value={group.percentage}
                  label={`${group.percentage}%`}
                />
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </Grid>
  );
}
