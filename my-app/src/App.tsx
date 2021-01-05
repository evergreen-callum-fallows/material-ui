import React, {useState} from 'react';
import './App.css';
import {
  Container,
  Grid,
  makeStyles
} from "@material-ui/core";
import CardComponent from "./components/Card";
import {infoFeedItems, lastVisitedPatientsMock} from "./prototypes/App.prototype";
import InfoPanel from "./components/InfoPanel";
import SideNavigation from "./components/organisms/SideNavigation";

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
  toolbar: {},
  menuButton: {}
  }));

/* Cards */
const Cards = lastVisitedPatientsMock && lastVisitedPatientsMock.map(({date_of_birth, gender, name, nhsNumber}) =>
    <Grid spacing={4} item xs={12} sm={6} md={4}>
      <CardComponent gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></CardComponent>
    </Grid>)


function App() {
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState(0);


  return (
      <div className={classes.root}>
        <Container className={classes.mainContainer}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={2} md={2} lg={1} className={classes.footer}>
                <SideNavigation
                    activeItem={activeItem}
                    onClick={(index: number) => {setActiveItem(index)}}
                />
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
