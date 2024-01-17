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
      views: 450321,
      watchhours: "63,278",
      avgvd: "12:32",
      subsgained: "78",
      estrev: "$132",
      cpm: "1.2",
      delta: "overperforming",
      deltaType: "moderateIncrease",
    },
    {
      name: "Video 2",
      views: "350,321",
      watchhours: "56,877",
      avgvd: "10:55",
      subsgained: "44",
      estrev: "$113",
      cpm: "1.1",
      delta: "average",
      deltaType: "unchanged",
    },
    {
      name: "Video 3",
      views: "243,800",
      watchhours: "43,080",
      avgvd: "9:44",
      subsgained: "33",
      estrev: "$97",
      cpm: "1.1",
      delta: "underperforming",
      deltaType: "moderateDecrease",
    },
    {
        name: "Video 4",
        views: 450321,
        watchhours: "63,278",
        avgvd: "12:32",
        subsgained: "78",
        estrev: "$132",
        cpm: "1.2",
        delta: "overperforming",
        deltaType: "moderateIncrease",
      },
      {
        name: "Video 5",
        views: "350,321",
        watchhours: "56,877",
        avgvd: "10:55",
        subsgained: "44",
        estrev: "$113",
        cpm: "1.1",
        delta: "average",
        deltaType: "unchanged",
      },
      {
        name: "Video 6",
        views: "243,800",
        watchhours: "43,080",
        avgvd: "9:44",
        subsgained: "33",
        estrev: "$97",
        cpm: "1.1",
        delta: "underperforming",
        deltaType: "moderateDecrease",
      },
      {
        name: "Video 7",
        views: 450321,
        watchhours: "63,278",
        avgvd: "12:32",
        subsgained: "78",
        estrev: "$132",
        cpm: "1.2",
        delta: "overperforming",
        deltaType: "moderateIncrease",
      },
      {
        name: "Video 8",
        views: "350,321",
        watchhours: "56,877",
        avgvd: "10:55",
        subsgained: "44",
        estrev: "$113",
        cpm: "1.1",
        delta: "average",
        deltaType: "unchanged",
      },
      {
        name: "Video 9",
        views: "243,800",
        watchhours: "43,080",
        avgvd: "9:44",
        subsgained: "33",
        estrev: "$97",
        cpm: "1.1",
        delta: "underperforming",
        deltaType: "moderateDecrease",
      },
      {
        name: "Video 10",
        views: "243,800",
        watchhours: "43,080",
        avgvd: "9:44",
        subsgained: "33",
        estrev: "$97",
        cpm: "1.1",
        delta: "underperforming",
        deltaType: "moderateDecrease",
      },
  ];
  
  export default function RecentVideos() {
    return (
      <Card className="h-fit w-full">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Video Name</TableHeaderCell>
              <TableHeaderCell className="text-right">Views</TableHeaderCell>
              <TableHeaderCell className="text-right">Watch Hours</TableHeaderCell>
              <TableHeaderCell className="text-right">Average VD</TableHeaderCell>
              <TableHeaderCell className="text-right">Subscribers Gained</TableHeaderCell>

              <TableHeaderCell className="text-right">Est. Revenue</TableHeaderCell>
              <TableHeaderCell className="text-right">CPM</TableHeaderCell>
              <TableHeaderCell className="text-right">Overall</TableHeaderCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {salesPeople.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.views}</TableCell>
                <TableCell className="text-right">{item.watchhours}</TableCell>
                <TableCell className="text-right">{item.avgvd}</TableCell>
                <TableCell className="text-right">{item.subsgained}</TableCell>
                <TableCell className="text-right">{item.estrev}</TableCell>
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