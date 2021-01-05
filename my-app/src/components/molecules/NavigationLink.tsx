import {Button, makeStyles} from "@material-ui/core";
import clsx from  'clsx';
import * as React from "react";

interface INavigationLink {
    name: string;
    icon: JSX.Element;
    activeItem: number;
    index: number;
    onClick: (index: number) => void;
}

const useStyles = makeStyles({
    button: {
        height: 150
    },
    activeButton: {
        background: 'blue'
    },
    label: {
        flexDirection: 'column'
    },
    icon: {
        fontSize: '100px !important',
        marginBottom: 12
    }
})

const NavigationLink = (props: INavigationLink): JSX.Element => {
    const classes = useStyles();
    const activeItem = props.activeItem === props.index;
    return <Button
            onClick={() => props.onClick(props.index)}
            classes={{ root: clsx(classes.button, activeItem && classes.activeButton), label: classes.label }}>
                {props.icon}
                {props.name}
            </Button>;
}


export default NavigationLink;