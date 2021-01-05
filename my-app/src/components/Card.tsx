import * as React from "react";
import {Divider, Link, List, ListItem, makeStyles} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";

interface ICardInterface {
    name: string;
    nhsNumber: string;
    gender: string;
    date_of_birth: string
}

const useStyles = makeStyles((theme) => ({
    card: {
        border: '1px solid gray',
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


export default CardComponent;
