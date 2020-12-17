import React, {useState} from 'react';
import clsx from 'clsx';
import './App.css';
import {
  Container,
  Divider,
  Drawer,
  Grid, IconButton, List, ListItem, ListItemIcon,
  ListItemText,
  makeStyles, Toolbar, Typography,
} from "@material-ui/core";
import CardComponent from "./components/Card";
import {infoFeedItems, lastVisitedPatientsMock} from "./prototypes/App.prototype";
import NavigationLink from "./components/NavigationLink";
import InfoPanel from "./components/InfoPanel";
import {ArrowRight, ContactMail} from '@material-ui/icons';
const theme = {
  colors: {
    white: "#ffffff",
    green: {
      0: "#39b54a",
      75: "#6bc878",
      50: "#9cdaa4",
      25: "#cdecd2",
      10: "#ebf7ec",
      100: "#36ab45"
    },
    yellow: {
      0: "#ffc805",
      75: "#ffd644",
      50: "#ffe382",
      25: "#fff1c0",
      10: "#fff9e6",
      100: "#8d6e00"
    },
    gray: {
      0: "#706f6f",
      75: "#939393",
      50: "#b7b7b7",
      25: "#dbdbdb",
      5: "#f7f7f7",
      10: "#f0f0f0",
    },
    teal: {
      0: "#69c0ac",
      75: "#8fd0c1",
      50: "#afd9cf",
      25: "#d9efea"
    },
    aqua: {
      0: "#d4edfc",
      75: "#dff2fd",
      50: "#e9f6fd",
      25: "#f4fafe",
    },
    ruby: {
      0: "#d8338b",
      75: "#e474b1",
      50: "#eca4cb",
      25: "#f5d3e5",
      10: "#fae9f3",
    }
  }
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 0,
    margin:0,
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mainContainer: {
    padding: 0,
    textAlign: 'center',
    maxWidth: '100%'
  },
  gridContainer: {
    flexDirection: "row",
  },
  footer: {
    flexDirection: "row",
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      zIndex: '9999',
      bottom: 0,
      width: '100%',
      background: 'white'
    },
  },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {

    },
  menuButton: {

  }
  }));

/* Cards */
const Cards = lastVisitedPatientsMock && lastVisitedPatientsMock.map(({date_of_birth, gender, name, nhsNumber}) =>
    <Grid spacing={4} item xs={12} sm={6} md={4}>
      <CardComponent gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></CardComponent>
    </Grid>)


function App() {
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState(0);
  const navigationLinks = [
    {
      name: "Dashboard",
      icon: <div color={activeItem === 0 ? "green.0" : 'white'}/>
    },
    {
      name: "Patients",
      icon: <div color={activeItem === 1 ? "green.0" : 'white'}/>
    }
  ]
  const NavigationLinks = navigationLinks && navigationLinks.map((data, index) => <NavigationLink onClick={() => setActiveItem(index)} activeItem={activeItem} index={index} name={data.name} icon={data.icon}/>)

  return (
      <div className={classes.root}>
        <Container className={classes.mainContainer}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={2} md={2} lg={1} className={classes.footer}>
              {NavigationLinks}
            </Grid>
            <Grid item xs={6} sm={5} md={6}>
              <Grid spacing={4} container>
              {Cards}
              </Grid>
            </Grid>
            <Grid item xs={6} sm={5} md={4}>
              <InfoPanel data={infoFeedItems}/>
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}

export default App;
