import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import {Drawer, IconButton, useTheme, Divider} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import { IMenuProps } from "./index";

const SideBar = ({ classes, toggle, isOpen }: IMenuProps) => {
    const theme = useTheme();
    const menus = [
        {
            key: 'my-profile',
            icon: 'person',
            title: 'My Profile'
        },
        {
            key: 'my-assets',
            icon: 'attach_money',
            title: 'My Assets'
        },
        {
            key: 'get-pro',
            icon: 'upgrade',
            title: 'Get Pro'
        },
    ]
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={toggle}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {menus.map(({key, icon, title}) => (
                    <ListItem button key={key}>
                        <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
export default SideBar;