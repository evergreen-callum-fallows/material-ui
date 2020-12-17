
import * as React from "react";
import {Box, List, ListItem, ListItemText} from "@material-ui/core";
interface INavigationLink {
    name: string;
    icon: JSX.Element;
    activeItem: number;
    index: number;
    onClick?: () => void;
}

const NavigationLink = (props: INavigationLink): JSX.Element => {

    const activeItem = props.activeItem === props.index;
    return <List>
        <ListItem onClick={props.onClick}>
            <Box alignItems={"center"} padding={2} flexDirection={"column"}>
                {props.icon}
                <ListItemText primary={props.name} color={activeItem ? 'green.0' : 'white'}/>
            </Box>
        </ListItem>
    </List>;
}


export default NavigationLink;