import * as React from "react";
import logoWhite from '../res/images/Evergreen_App_Icon.png';
import {Container, makeStyles, Theme} from "@material-ui/core";

interface ILogo {
    name?: string;
    background?: string;
    className?: string;
    onClick?: () => void;
    color?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    image: {
        margin: "0 auto"
    }
}));

const Logo = (props: ILogo): JSX.Element => {

    const classes = useStyles();

    return <Container onClick={props.onClick} className={props.className}>
        <img width={70} className={classes.image} src={logoWhite} alt={"Evergreen Life"} />
    </Container>;
}

export default Logo;