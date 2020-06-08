import React from 'react';
import clsx from "clsx";
import SideBar from "./SideBar";
import AppBar from "./AppBar";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useOpen from "../../hooks/useOpen";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },

    })
)

export interface ILayoutProps {
    children: React.ReactNode;
}
export interface IMenuProps {
    isOpen: boolean,
    classes: any,
    toggle: any
}

export const Layout = ({ children }: ILayoutProps) => {
    const classes = useStyles();
    const {isOpen, toggle} = useOpen();
    return (
        <div className={classes.root}>
            <AppBar classes={classes} isOpen={isOpen} toggle={toggle}/>
            <SideBar classes={classes} isOpen={isOpen} toggle={toggle}/>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: isOpen,
                })}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    );
}

export default Layout;