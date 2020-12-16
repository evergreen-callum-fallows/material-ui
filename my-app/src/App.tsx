import React from 'react';
import './App.css';
import {Container, Divider, Grid, Link, makeStyles} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    border: '1px solid black',
    borderRadius: '16px',
    boxShadow: '1px 1px 1px black'
  },
  link: {
    transition: "all 0.15s ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "#36ab45",
    fontWeight: 700
  }
}));

const CardComponent = (props: ICardInterface): JSX.Element => {
  const classes = useStyles();
  return <List className={classes.card}>
      <ListItem>
        <ListItemText primary={props.name} secondary={props.nhsNumber} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Gender" secondary={props.gender} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Born" secondary={props.date_of_birth}/>
      </ListItem>
      <Divider />
      <ListItem>
        <Link className={classes.link} href="#">
          Get Summary
        </Link>
      </ListItem>
    </List>
}
const listData = [
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth:"14-Jul-1956 (39y)"
  },
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth:"14-Jul-1956 (39y)"
  },
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth: ""
  },
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth:"14-Jul-1956 (39y)"
  }]

interface ICardInterface {
  name: string;
  nhsNumber: string;
  gender: string;
  date_of_birth: string
}
/* Cards */
const Cards = listData && listData.map(({date_of_birth, gender, name, nhsNumber}) =>
    <Grid item xs={12} md={3}>
      <CardComponent gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></CardComponent>
    </Grid>)

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Container>
          <Grid container spacing={8}>
            {Cards}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
