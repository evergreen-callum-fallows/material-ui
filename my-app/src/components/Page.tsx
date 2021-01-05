import {lastVisitedPatientsMock} from "../prototypes/App.prototype";
import Card from "./Card";
import * as React from "react";
import {Box, Button, List, ListItem, Typography} from "@material-ui/core";

interface IPage {
    subtitle: string;
    title: string;
    type: string;
    buttonText: string;
}

const Page = (props: IPage) => {

    /* Cards */
    const Cards = lastVisitedPatientsMock && lastVisitedPatientsMock.map(({date_of_birth, gender, name, nhsNumber}) =>
        <ListItem><Card gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></Card></ListItem>)

    return <Box>
        <Typography>{props.title}</Typography>
        <Box paddingLeft={[0, 8]}>
            <Typography>{props.subtitle}</Typography>
            <List>
                {props.type === "dashboard" && Cards}
            </List>
            <Box padding={8} textAlign={"right"}>
                <Button>{props.buttonText}</Button>
            </Box>
        </Box>
    </Box>
}

export default Page;