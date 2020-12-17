import * as React from "react";
import {Box, Divider, List, ListItem, ListItemText} from "@material-ui/core";

const InfoArticle = (props: any): JSX.Element => {
    return <Box height={"33vh"} padding={"20px"}>
        <List>
            <ListItem>
                <ListItemText primary={props.data.name}/>
            </ListItem>
            <ListItem>
                <ListItemText primary={props.data.date}/>
            </ListItem>
            <ListItem>
                <ListItemText primary={props.data.message}/>
            </ListItem>
            <ListItem>
                <Divider />
            </ListItem>
        </List>
    </Box>
}

export default InfoArticle;