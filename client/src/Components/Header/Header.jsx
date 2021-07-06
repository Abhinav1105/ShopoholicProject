import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import HeaderButtons from './HeaderButtons';
import { useState } from 'react';
import { Menu } from '@material-ui/icons';
import Logo from './../../Images/Logo.jpg';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    header: {
        background: '#1d3459',
        height: 60
    },
    component: {
        marginLeft: '7%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none',
        display: 'flex'
    },
    Logo: {
        width: 75
    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 15
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    HeaderButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }
}));

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <HeaderButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <AppBar position="fixed" className={classes.header}>
            <ToolBar>
                <IconButton
                    color='inherit'
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to='/' className={classes.component}>
                        <img src={Logo} alt="logo" className={classes.logo} />
                        <Typography className = {classes.heading}>SHOPOHOLIC </Typography>
                </Link>
                <span className={classes.HeaderButtons}><HeaderButtons /></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;