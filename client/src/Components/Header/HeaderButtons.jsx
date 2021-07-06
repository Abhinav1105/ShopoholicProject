import React, { useState, useContext } from 'react';
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import LoginDialog from '../Login/LoginDialog';
import { LoginContext } from '../../context/ContextProvider';
import { useSelector } from 'react-redux';
import Profile from './Profile';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 7% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 16,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#1d3459',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 20
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        [theme.breakpoints.down('sm')]: {
            background: '#1d3459',
            color: '#FFFFFF'
        }   
    }
}));


const HeaderButtons = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
            {
                account ? <Profile account={account} setAccount={setAccount} /> : 
                <Link>
                    <Button className={classes.login} variant="contained" onClick={() => openDialog() }>Login</Button>
                </Link>
            }
        </Box>
    )
}

export default HeaderButtons;