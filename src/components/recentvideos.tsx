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
      views: "450,321",
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
        views: "450,321",
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
        views: "450,321",
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
        views: "450,321",
        watchhours: "63,278",
        avgvd: "12:32",
        subsgained: "78",
        estrev: "$132",
        cpm: "1.2",
        delta: "overperforming",
        deltaType: "moderateIncrease",
      },
  ];
  
  export default function RecentVideos() {
    return (
      <Card className="h-fit w-full shadow-xl" decoration="top" decorationColor="red">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-center">Video Name</TableHeaderCell>
              <TableHeaderCell className="text-center">Views</TableHeaderCell>
              <TableHeaderCell className="text-center">Watch Hours</TableHeaderCell>
              <TableHeaderCell className="text-center">Average VD</TableHeaderCell>
              <TableHeaderCell className="text-center">Subs Gained</TableHeaderCell>

              <TableHeaderCell className="text-center">Est. Revenue</TableHeaderCell>
              <TableHeaderCell className="text-center">CPM</TableHeaderCell>
              <TableHeaderCell className="text-center">Overall</TableHeaderCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {salesPeople.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="text-center">{item.name}</TableCell>
                <TableCell className="text-center">{item.views}</TableCell>
                <TableCell className="text-center font-semibold">{item.watchhours}</TableCell>
                <TableCell className="text-center">{item.avgvd}</TableCell>
                <TableCell className="text-center">{item.subsgained}</TableCell>
                <TableCell className="text-center">{item.estrev}</TableCell>
                <TableCell className="text-center">{item.cpm}</TableCell>
                <TableCell className="text-center">
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