import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    BadgeDelta
  } from "@tremor/react";
  
  const salesPeople = [
    {
      name: "Video 1",
      leads: "450,321",
      sales: "1,000,000",
      quota: "1,200,000",
      variance: "low",
      region: "Region A",
      cpm: "1.2",
      delta: "overperforming",
      deltaType: "moderateIncrease",
    },
    {
        name: "Video 2",
      leads: "350,321",
      sales: "900,000",
      quota: "1,000,000",
      variance: "low",
      region: "Region B",
      cpm: "1.1",
      delta: "average",
      deltaType: "unchanged",
    },
    {
      name: "Video 3",
      leads: 52,
      sales: "930,000",
      quota: "1,000,000",
      variance: "medium",
      region: "Region C",
        cpm: "1.1",
      delta: "underperforming",
      deltaType: "moderateDecrease",
    },
    {
        name: "Video 4",
      leads: 22,
      sales: "390,000",
      quota: "250,000",
      variance: "low",
      region: "Region A",
      cpm: "1.2",
      delta: "overperforming",
      deltaType: "increase",
    },
    {
        name: "Video 5",
      leads: 49,
      sales: "860,000",
      quota: "750,000",
      variance: "low",
      region: "Region B",
        cpm: "1.1",
      delta: "overperforming",
      deltaType: "increase",
    },
    {
        name: "Video 6",
      leads: 82,
      sales: "1,460,000",
      quota: "1,500,000",
      variance: "low",
      region: "Region A",
        cpm: "1.2",
      delta: "average",
      deltaType: "unchanged",
    },
    {
        name: "Video 7",
      leads: 49,
      sales: "1,230,000",
      quota: "1,800,000",
      variance: "medium",
      region: "Region B",
      cpm: "1.1",
      delta: "underperforming",
      deltaType: "moderateDecrease",
    },
    {
        name: "Video 8",
        leads: 49,
        sales: "1,230,000",
        quota: "1,800,000",
        variance: "medium",
        region: "Region B",
        cpm: "1.1",
        delta: "underperforming",
        deltaType: "moderateDecrease",
      },
      {
        name: "Video 9",
        leads: 49,
        sales: "1,230,000",
        quota: "1,800,000",
        variance: "medium",
        region: "Region B",
        cpm: "1.1",
        delta: "underperforming",
        deltaType: "moderateDecrease",
      },
      {
        name: "Video 10",
        leads: 49,
        sales: "1,230,000",
        quota: "1,800,000",
        variance: "medium",
        region: "Region B",
        cpm: "1.1",
        delta: "underperforming",
        deltaType: "moderateDecrease",
      },
  ];
  
  export default function RecentVideos() {
    return (
      <Card className="h-fit my-5 w-full">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">Views</TableHeaderCell>
              <TableHeaderCell className="text-right">Watch Hours</TableHeaderCell>
              <TableHeaderCell className="text-right">Average VD</TableHeaderCell>
              <TableHeaderCell className="text-right">Comments</TableHeaderCell>

              <TableHeaderCell className="text-right">Est. Revenue</TableHeaderCell>
              <TableHeaderCell className="text-right">CPM</TableHeaderCell>
              <TableHeaderCell className="text-right">Subscribers Gained</TableHeaderCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {salesPeople.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.leads}</TableCell>
                <TableCell className="text-right">{item.sales}</TableCell>
                <TableCell className="text-right">{item.quota}</TableCell>
                <TableCell className="text-right">{item.variance}</TableCell>
                <TableCell className="text-right">{item.region}</TableCell>
                <TableCell className="text-right">{item.cpm}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={item.deltaType} size="xs">
                    {item.delta}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }