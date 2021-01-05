import * as React from "react";
import Logo from "../Logo";
import {Box, ButtonGroup, Container, makeStyles, Theme} from "@material-ui/core";
import NavigationLink from "../molecules/NavigationLink";
import { mainNavigation } from '../../constants/navigation'


interface ISideNavigation {
    onClick: (index: number) => void;
    activeItem: number;
}

interface INavigationButton {
    name: string;
    icon: JSX.Element;
}

const useStyles = makeStyles((theme: Theme) => ({
    navigationLinkWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        }
    },
    logo: {
        width: "100%"
    }

}));

const NavigationLinks = (props: ISideNavigation) => {
    return mainNavigation.map((button: INavigationButton, index: number) =>
        <NavigationLink onClick={props.onClick} activeItem={props.activeItem} index={index} name={button.name} icon={button.icon} />)
}

const SideNavigation = (props: ISideNavigation): JSX.Element => {

    const classes = useStyles();

    return <Box>
        <Container maxWidth={false} disableGutters>
            <Logo className={classes.logo} />
            <ButtonGroup className={classes.navigationLinkWrapper} color="primary" aria-label="outlined primary button group">
                {NavigationLinks(props)}
            </ButtonGroup>
        </Container>
    </Box>
}


export default SideNavigation;