import * as React from "react";
import Logo from "./Logo";
import {Box, List, ListItem} from "@material-ui/core";


interface ISideNavigation {
    navigationLinks: any;
    activeItem: number;
}

const SideNavigation = (props: ISideNavigation): JSX.Element => {
    return  <Box flexDirection={"column"} alignItems={"space-between"} height="100%">
        <Box flexDirection="column">
        <List>
            <ListItem>
                <Logo background={'green.0'} color={'white'} />
            </ListItem>
        </List>
        </Box>
        <Box height={["auto", "90%"]} justifyContent={"center"} flexDirection={["row", "column"]}>
            {props.navigationLinks}
        </Box>
    </Box>
}


export default SideNavigation;