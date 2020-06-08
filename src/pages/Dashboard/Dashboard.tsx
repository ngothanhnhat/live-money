import React from 'react';
import Layout from "layouts/Default";
import {
    createStyles,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Fab,
    MenuItem,
    Theme,
    Typography,
    Popper, Grow, Paper, ClickAwayListener, MenuList
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Cryptocurrency from "components/Cryptocurrency";
import Stock from "components/Stock";
import Metal from "components/Metal";
import RealEstate from "components/RealEstate";
import Business from "components/Business";
import PieChart from "components/PieChart";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(20),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        fab: {
            right: 20,
            bottom: theme.spacing(2),
            position: 'fixed',
        },
    }),
);

const Dashboard = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>('p1');
    const handleExpand = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    const [open, setOpen] = React.useState<boolean>(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    const openModal = (type: string) => {
        console.log(type)

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const menuItems: {key: string, value: string}[] = [
        {key: 'cryptocurrency', value: 'Cryptocurrency'},
        {key: 'stocks', value: 'Stocks'},
        {key: 'real-estate', value: 'Real Estate'},
        {key: 'business', value: 'Business'},
    ];

    return (
        <Layout>
            <PieChart/>
            <ExpansionPanel expanded={expanded === 'p1'} onChange={handleExpand('p1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p1-bh-content"
                    id="p1-bh-header"
                >
                    <Typography className={classes.heading}>Cryptocurrency</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Cryptocurrency />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'p2'} onChange={handleExpand('p2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p2-bh-content"
                    id="p2-bh-header"
                >
                    <Typography className={classes.heading}>Stocks</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Stock />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'p3'} onChange={handleExpand('p3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p3-bh-content"
                    id="p3-bh-header"
                >
                    <Typography className={classes.heading}>Metals</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Metal />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'p4'} onChange={handleExpand('p4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4-bh-content"
                    id="p4-bh-header"
                >
                    <Typography className={classes.heading}>Real Estate</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <RealEstate />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'p5'} onChange={handleExpand('p5')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p5-bh-content"
                    id="p5-bh-header"
                >
                    <Typography className={classes.heading}>Business</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Business />
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <div className={classes.fab}>
                <Fab
                    color="primary"
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleToggle}
                    ref={anchorRef}
                >
                    <AddIcon />
                </Fab>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {
                                            menuItems.map(({key, value}) =>
                                                <MenuItem key={key} onClick={() => openModal(key)}>{value}</MenuItem>)
                                        }
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Layout>
    )
}

export default Dashboard;