/*
    DataPage.jsx
    Props: {none}
    Displays data visualization for incoming InfluxDB datapoints from SOLPOS.
    Changes:
    - Could potentially use Marimekko instead of Bar for Histogram (bar-width)
    - Remove dummydata.
*/

import React, { useState } from "react";
import Bump from "./SVG/Bump";
import Bar from "./SVG/Bar";
import Scatter from "./SVG/Scatter";
import SwipeableViews from "react-swipeable-views";
import GFXAppBar from "./GFX/GFXAppBar";
import GFXTable from "./GFX/GFXTable";
import { makeStyles } from "@material-ui/styles";
import { Container, Paper, Tab, Tabs } from "@material-ui/core";

const height = 300;

const data = [
  {
    id: "Data 1",
    data: [
      {
        x: 2000,
        y: 2,
      },
      {
        x: 2001,
        y: 2,
      },
      {
        x: 2002,
        y: 10,
      },
      {
        x: 2003,
        y: 10,
      },
      {
        x: 2004,
        y: 12,
      },
    ],
  },
  {
    id: "Data 2",
    data: [
      {
        x: 2000,
        y: 1,
      },
      {
        x: 2001,
        y: 12,
      },
      {
        x: 2002,
        y: 4,
      },
      {
        x: 2003,
        y: 12,
      },
      {
        x: 2004,
        y: 4,
      },
    ],
  },
  {
    id: "Data 3",
    data: [
      {
        x: 2000,
        y: 9,
      },
      {
        x: 2001,
        y: 4,
      },
      {
        x: 2002,
        y: 10,
      },
      {
        x: 2003,
        y: 7,
      },
      {
        x: 2004,
        y: 10,
      },
    ],
  },
];

const barData = [
  {
    country: "AD",
    "hot dog": 198,
    "hot dogColor": "hsl(320, 70%, 50%)",
    burger: 7,
    burgerColor: "hsl(105, 70%, 50%)",
    sandwich: 98,
    sandwichColor: "hsl(159, 70%, 50%)",
    kebab: 8,
    kebabColor: "hsl(356, 70%, 50%)",
    fries: 68,
    friesColor: "hsl(185, 70%, 50%)",
    donut: 188,
    donutColor: "hsl(102, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 182,
    "hot dogColor": "hsl(321, 70%, 50%)",
    burger: 51,
    burgerColor: "hsl(320, 70%, 50%)",
    sandwich: 157,
    sandwichColor: "hsl(9, 70%, 50%)",
    kebab: 122,
    kebabColor: "hsl(352, 70%, 50%)",
    fries: 152,
    friesColor: "hsl(289, 70%, 50%)",
    donut: 154,
    donutColor: "hsl(195, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 155,
    "hot dogColor": "hsl(321, 70%, 50%)",
    burger: 117,
    burgerColor: "hsl(38, 70%, 50%)",
    sandwich: 38,
    sandwichColor: "hsl(133, 70%, 50%)",
    kebab: 102,
    kebabColor: "hsl(150, 70%, 50%)",
    fries: 133,
    friesColor: "hsl(205, 70%, 50%)",
    donut: 143,
    donutColor: "hsl(306, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 142,
    "hot dogColor": "hsl(29, 70%, 50%)",
    burger: 179,
    burgerColor: "hsl(231, 70%, 50%)",
    sandwich: 96,
    sandwichColor: "hsl(341, 70%, 50%)",
    kebab: 14,
    kebabColor: "hsl(164, 70%, 50%)",
    fries: 63,
    friesColor: "hsl(170, 70%, 50%)",
    donut: 153,
    donutColor: "hsl(359, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 170,
    "hot dogColor": "hsl(340, 70%, 50%)",
    burger: 126,
    burgerColor: "hsl(289, 70%, 50%)",
    sandwich: 90,
    sandwichColor: "hsl(40, 70%, 50%)",
    kebab: 95,
    kebabColor: "hsl(235, 70%, 50%)",
    fries: 33,
    friesColor: "hsl(238, 70%, 50%)",
    donut: 11,
    donutColor: "hsl(328, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 10,
    "hot dogColor": "hsl(324, 70%, 50%)",
    burger: 166,
    burgerColor: "hsl(146, 70%, 50%)",
    sandwich: 108,
    sandwichColor: "hsl(278, 70%, 50%)",
    kebab: 67,
    kebabColor: "hsl(79, 70%, 50%)",
    fries: 54,
    friesColor: "hsl(115, 70%, 50%)",
    donut: 52,
    donutColor: "hsl(58, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 99,
    "hot dogColor": "hsl(28, 70%, 50%)",
    burger: 106,
    burgerColor: "hsl(62, 70%, 50%)",
    sandwich: 194,
    sandwichColor: "hsl(275, 70%, 50%)",
    kebab: 174,
    kebabColor: "hsl(45, 70%, 50%)",
    fries: 49,
    friesColor: "hsl(5, 70%, 50%)",
    donut: 92,
    donutColor: "hsl(15, 70%, 50%)",
  },
];

const scatterData = [
  {
    id: "group A",
    data: [
      {
        x: 54,
        y: 7,
      },
      {
        x: 46,
        y: 28,
      },
      {
        x: 88,
        y: 117,
      },
      {
        x: 84,
        y: 102,
      },
      {
        x: 38,
        y: 51,
      },
      {
        x: 52,
        y: 32,
      },
      {
        x: 90,
        y: 84,
      },
      {
        x: 60,
        y: 63,
      },
      {
        x: 18,
        y: 58,
      },
      {
        x: 14,
        y: 87,
      },
      {
        x: 39,
        y: 55,
      },
      {
        x: 46,
        y: 108,
      },
      {
        x: 16,
        y: 80,
      },
      {
        x: 96,
        y: 51,
      },
      {
        x: 52,
        y: 98,
      },
      {
        x: 91,
        y: 115,
      },
      {
        x: 36,
        y: 91,
      },
      {
        x: 58,
        y: 46,
      },
      {
        x: 79,
        y: 77,
      },
      {
        x: 16,
        y: 71,
      },
      {
        x: 40,
        y: 48,
      },
      {
        x: 49,
        y: 109,
      },
      {
        x: 15,
        y: 73,
      },
      {
        x: 71,
        y: 32,
      },
      {
        x: 78,
        y: 63,
      },
      {
        x: 80,
        y: 5,
      },
      {
        x: 9,
        y: 89,
      },
      {
        x: 23,
        y: 30,
      },
      {
        x: 51,
        y: 12,
      },
      {
        x: 56,
        y: 89,
      },
      {
        x: 80,
        y: 10,
      },
      {
        x: 15,
        y: 66,
      },
      {
        x: 10,
        y: 7,
      },
      {
        x: 60,
        y: 102,
      },
      {
        x: 27,
        y: 1,
      },
      {
        x: 9,
        y: 88,
      },
      {
        x: 55,
        y: 95,
      },
      {
        x: 49,
        y: 79,
      },
      {
        x: 39,
        y: 86,
      },
      {
        x: 51,
        y: 89,
      },
      {
        x: 53,
        y: 21,
      },
      {
        x: 46,
        y: 42,
      },
      {
        x: 25,
        y: 18,
      },
      {
        x: 7,
        y: 70,
      },
      {
        x: 88,
        y: 102,
      },
      {
        x: 36,
        y: 74,
      },
      {
        x: 36,
        y: 27,
      },
      {
        x: 65,
        y: 84,
      },
      {
        x: 20,
        y: 39,
      },
      {
        x: 50,
        y: 19,
      },
    ],
  },
  {
    id: "group B",
    data: [
      {
        x: 3,
        y: 47,
      },
      {
        x: 58,
        y: 61,
      },
      {
        x: 76,
        y: 98,
      },
      {
        x: 62,
        y: 3,
      },
      {
        x: 8,
        y: 46,
      },
      {
        x: 28,
        y: 8,
      },
      {
        x: 1,
        y: 45,
      },
      {
        x: 1,
        y: 69,
      },
      {
        x: 11,
        y: 75,
      },
      {
        x: 25,
        y: 23,
      },
      {
        x: 33,
        y: 16,
      },
      {
        x: 95,
        y: 78,
      },
      {
        x: 83,
        y: 93,
      },
      {
        x: 7,
        y: 57,
      },
      {
        x: 2,
        y: 104,
      },
      {
        x: 35,
        y: 117,
      },
      {
        x: 1,
        y: 90,
      },
      {
        x: 80,
        y: 58,
      },
      {
        x: 67,
        y: 68,
      },
      {
        x: 48,
        y: 34,
      },
      {
        x: 78,
        y: 41,
      },
      {
        x: 51,
        y: 83,
      },
      {
        x: 42,
        y: 116,
      },
      {
        x: 100,
        y: 31,
      },
      {
        x: 43,
        y: 7,
      },
      {
        x: 18,
        y: 28,
      },
      {
        x: 96,
        y: 68,
      },
      {
        x: 13,
        y: 8,
      },
      {
        x: 32,
        y: 9,
      },
      {
        x: 52,
        y: 93,
      },
      {
        x: 13,
        y: 101,
      },
      {
        x: 100,
        y: 91,
      },
      {
        x: 70,
        y: 100,
      },
      {
        x: 8,
        y: 31,
      },
      {
        x: 74,
        y: 69,
      },
      {
        x: 93,
        y: 51,
      },
      {
        x: 81,
        y: 38,
      },
      {
        x: 64,
        y: 5,
      },
      {
        x: 82,
        y: 52,
      },
      {
        x: 29,
        y: 84,
      },
      {
        x: 87,
        y: 110,
      },
      {
        x: 17,
        y: 63,
      },
      {
        x: 56,
        y: 59,
      },
      {
        x: 84,
        y: 24,
      },
      {
        x: 40,
        y: 82,
      },
      {
        x: 18,
        y: 52,
      },
      {
        x: 60,
        y: 77,
      },
      {
        x: 42,
        y: 11,
      },
      {
        x: 88,
        y: 44,
      },
      {
        x: 27,
        y: 38,
      },
    ],
  },
  {
    id: "group C",
    data: [
      {
        x: 59,
        y: 109,
      },
      {
        x: 33,
        y: 66,
      },
      {
        x: 75,
        y: 4,
      },
      {
        x: 38,
        y: 30,
      },
      {
        x: 73,
        y: 12,
      },
      {
        x: 86,
        y: 16,
      },
      {
        x: 36,
        y: 4,
      },
      {
        x: 65,
        y: 48,
      },
      {
        x: 47,
        y: 111,
      },
      {
        x: 8,
        y: 80,
      },
      {
        x: 9,
        y: 58,
      },
      {
        x: 30,
        y: 91,
      },
      {
        x: 68,
        y: 3,
      },
      {
        x: 41,
        y: 97,
      },
      {
        x: 30,
        y: 110,
      },
      {
        x: 20,
        y: 27,
      },
      {
        x: 23,
        y: 41,
      },
      {
        x: 73,
        y: 80,
      },
      {
        x: 1,
        y: 64,
      },
      {
        x: 96,
        y: 82,
      },
      {
        x: 70,
        y: 86,
      },
      {
        x: 47,
        y: 6,
      },
      {
        x: 3,
        y: 99,
      },
      {
        x: 6,
        y: 22,
      },
      {
        x: 99,
        y: 118,
      },
      {
        x: 94,
        y: 71,
      },
      {
        x: 54,
        y: 13,
      },
      {
        x: 74,
        y: 28,
      },
      {
        x: 87,
        y: 70,
      },
      {
        x: 37,
        y: 83,
      },
      {
        x: 26,
        y: 41,
      },
      {
        x: 93,
        y: 83,
      },
      {
        x: 4,
        y: 57,
      },
      {
        x: 12,
        y: 113,
      },
      {
        x: 16,
        y: 10,
      },
      {
        x: 57,
        y: 98,
      },
      {
        x: 12,
        y: 10,
      },
      {
        x: 96,
        y: 68,
      },
      {
        x: 48,
        y: 75,
      },
      {
        x: 100,
        y: 2,
      },
      {
        x: 29,
        y: 55,
      },
      {
        x: 64,
        y: 97,
      },
      {
        x: 59,
        y: 22,
      },
      {
        x: 7,
        y: 57,
      },
      {
        x: 95,
        y: 87,
      },
      {
        x: 36,
        y: 86,
      },
      {
        x: 60,
        y: 77,
      },
      {
        x: 54,
        y: 119,
      },
      {
        x: 3,
        y: 21,
      },
      {
        x: 87,
        y: 37,
      },
    ],
  },
  {
    id: "group D",
    data: [
      {
        x: 51,
        y: 84,
      },
      {
        x: 5,
        y: 57,
      },
      {
        x: 32,
        y: 102,
      },
      {
        x: 43,
        y: 56,
      },
      {
        x: 12,
        y: 45,
      },
      {
        x: 38,
        y: 81,
      },
      {
        x: 60,
        y: 27,
      },
      {
        x: 63,
        y: 88,
      },
      {
        x: 35,
        y: 59,
      },
      {
        x: 70,
        y: 72,
      },
      {
        x: 5,
        y: 120,
      },
      {
        x: 29,
        y: 85,
      },
      {
        x: 26,
        y: 77,
      },
      {
        x: 96,
        y: 98,
      },
      {
        x: 61,
        y: 106,
      },
      {
        x: 86,
        y: 83,
      },
      {
        x: 21,
        y: 32,
      },
      {
        x: 61,
        y: 4,
      },
      {
        x: 72,
        y: 21,
      },
      {
        x: 14,
        y: 7,
      },
      {
        x: 17,
        y: 108,
      },
      {
        x: 54,
        y: 93,
      },
      {
        x: 84,
        y: 12,
      },
      {
        x: 48,
        y: 104,
      },
      {
        x: 73,
        y: 50,
      },
      {
        x: 20,
        y: 93,
      },
      {
        x: 74,
        y: 57,
      },
      {
        x: 53,
        y: 67,
      },
      {
        x: 60,
        y: 22,
      },
      {
        x: 16,
        y: 109,
      },
      {
        x: 71,
        y: 37,
      },
      {
        x: 76,
        y: 57,
      },
      {
        x: 83,
        y: 117,
      },
      {
        x: 68,
        y: 93,
      },
      {
        x: 76,
        y: 77,
      },
      {
        x: 84,
        y: 81,
      },
      {
        x: 99,
        y: 98,
      },
      {
        x: 14,
        y: 43,
      },
      {
        x: 64,
        y: 28,
      },
      {
        x: 67,
        y: 2,
      },
      {
        x: 2,
        y: 93,
      },
      {
        x: 12,
        y: 27,
      },
      {
        x: 95,
        y: 97,
      },
      {
        x: 91,
        y: 101,
      },
      {
        x: 82,
        y: 111,
      },
      {
        x: 20,
        y: 106,
      },
      {
        x: 6,
        y: 74,
      },
      {
        x: 93,
        y: 115,
      },
      {
        x: 52,
        y: 37,
      },
      {
        x: 99,
        y: 66,
      },
    ],
  },
  {
    id: "group E",
    data: [
      {
        x: 84,
        y: 9,
      },
      {
        x: 73,
        y: 67,
      },
      {
        x: 9,
        y: 33,
      },
      {
        x: 71,
        y: 30,
      },
      {
        x: 20,
        y: 13,
      },
      {
        x: 60,
        y: 68,
      },
      {
        x: 43,
        y: 116,
      },
      {
        x: 84,
        y: 49,
      },
      {
        x: 4,
        y: 83,
      },
      {
        x: 26,
        y: 48,
      },
      {
        x: 86,
        y: 17,
      },
      {
        x: 27,
        y: 2,
      },
      {
        x: 24,
        y: 85,
      },
      {
        x: 100,
        y: 53,
      },
      {
        x: 8,
        y: 84,
      },
      {
        x: 94,
        y: 63,
      },
      {
        x: 39,
        y: 117,
      },
      {
        x: 21,
        y: 73,
      },
      {
        x: 99,
        y: 22,
      },
      {
        x: 69,
        y: 30,
      },
      {
        x: 16,
        y: 30,
      },
      {
        x: 29,
        y: 49,
      },
      {
        x: 62,
        y: 60,
      },
      {
        x: 99,
        y: 59,
      },
      {
        x: 27,
        y: 82,
      },
      {
        x: 55,
        y: 113,
      },
      {
        x: 74,
        y: 40,
      },
      {
        x: 42,
        y: 28,
      },
      {
        x: 2,
        y: 40,
      },
      {
        x: 97,
        y: 5,
      },
      {
        x: 87,
        y: 7,
      },
      {
        x: 20,
        y: 73,
      },
      {
        x: 72,
        y: 50,
      },
      {
        x: 10,
        y: 94,
      },
      {
        x: 97,
        y: 71,
      },
      {
        x: 46,
        y: 9,
      },
      {
        x: 19,
        y: 50,
      },
      {
        x: 38,
        y: 32,
      },
      {
        x: 77,
        y: 43,
      },
      {
        x: 3,
        y: 93,
      },
      {
        x: 45,
        y: 2,
      },
      {
        x: 59,
        y: 113,
      },
      {
        x: 19,
        y: 18,
      },
      {
        x: 53,
        y: 82,
      },
      {
        x: 20,
        y: 109,
      },
      {
        x: 59,
        y: 116,
      },
      {
        x: 84,
        y: 25,
      },
      {
        x: 71,
        y: 26,
      },
      {
        x: 8,
        y: 92,
      },
      {
        x: 34,
        y: 115,
      },
    ],
  },
];

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "rgb(21, 27, 32)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    overflow: "none",
  },
  appbar: {
    borderRadius: "1rem",
    backgroundColor: "rgb(21, 27, 32) !important",
    color: "#fff",
    margin: "10rem 0",
  },
  panel: {
    backgroundColor: "rgb(21, 27, 32) !important",
    borderRadius: "0 0 1rem 1rem !important",
  },
}));

function itemID(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <React.Fragment
      id={`full-width-tabpanel-${index}`}
      style={{ margin: 0, padding: 0 }}
      {...other}
    >
      {value === index && children}
    </React.Fragment>
  );
}

const DataPage = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.container}>
      <h1 style={{ fontFamily: "Futura", color: "white", padding: "2rem" }}>
        Dashboard
      </h1>
      <GFXAppBar position="static" color="default" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Time-Series Line" {...itemID(0)} />
          <Tab label="Bar" {...itemID(1)} />
          <Tab label="Scatter" {...itemID(2)} />
          <Tab label="Table" {...itemID(2)} />
        </Tabs>
        <Paper elevation={10} className={classes.panel}>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir="rtl">
              <Bump data={data} height={height} />
            </TabPanel>
            <TabPanel value={value} index={1} dir="rtl">
              <Bar data={barData} height={height} />
            </TabPanel>
            <TabPanel value={value} index={2} dir="rtl">
              <Scatter data={scatterData} height={height} />
            </TabPanel>
            <TabPanel value={value} index={3} dir="rtl">
              <GFXTable />
            </TabPanel>
          </SwipeableViews>
        </Paper>
      </GFXAppBar>
    </Container>
  );
};

export default DataPage;
