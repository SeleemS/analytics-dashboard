import { Card, DonutChart, Title } from "@tremor/react";

const genders = [
  {
    gender: "Male",
    views: 9810,
  },
  {
    gender: "Female",
    views: 4567,
  },
];


const GenderDonut = () => (
  <Card className="max-w-sm h-fit">
    <Title>Gender</Title>
    <DonutChart

      data={genders}
      category="views"
      index="gender"
      showAnimation={true}
      colors={["blue", "pink"]}
      showLabel={false}
    />
  </Card>
);

export default GenderDonut;