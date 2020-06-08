import React from 'react';
import clsx from 'clsx';
import {AppBar as MuiAppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {IMenuProps} from "./index";


const AppBar = ({ classes, isOpen, toggle }: IMenuProps) => {

    return (
        <MuiAppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: isOpen,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggle}
                    edge="start"
                    className={clsx(classes.menuButton, isOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Live Money
                </Typography>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar;