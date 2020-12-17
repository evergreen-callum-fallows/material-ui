import * as React from "react";
import logoWhite from '../res/images/Evergreen_App_Icon.png';
import {List, ListItem} from "@material-ui/core";

interface ILogo {
    name?: string;
    background: string;
    onClick?: () => void;
    color: string;
}

const Logo = (props: ILogo): JSX.Element => {

    return <List>
        <ListItem onClick={props.onClick}>
            <img width={70} src={logoWhite} alt={"Evergreen Life"} />
        </ListItem>
    </List>;
}

export default Logo;