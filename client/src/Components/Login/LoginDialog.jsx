import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import { authenticateLogin, authenticateSignup } from '../../service/api';

const useStyle = makeStyles({
    component: {
        height: '60vh',
        width: '70vh',
        maxWidth: 'unset !important'
    },
    login: {
        display: 'flex',
        flex: 1,
        padding: '15px 35px',
        flexDirection: 'column',
        '& > *': {
            marginTop: 15
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#1d3459',
        color: '#fff',
        marginTop: 40,
        height: 48,
        borderRadius: 2
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    signupText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        marginTop: 40,
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    errorText: {
        fontSize: 14,
        color: '#ff6161',
        marginTop: 20,
        lineHeight: 0,
        marginBottom: 20,
        fontWeight: 600
    }
})

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: ''
};

const accInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ acc, toggleAcc ] = useState(accInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    
    const toggleSignup = () => {
        toggleAcc(accInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAcc(accInitialValues.login);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box style={{display: 'flex'}}>
                    {
                        acc.view === 'login' ? 
                        <Box className={classes.login}>
                        { error && <Typography className={classes.errorText}>Please enter valid Email ID/Mobile number and Password</Typography> }
                            <TextField onChange={(e) => onValChange(e)} name='username' label='Enter Email/Mobile number' />
                            <TextField onChange={(e) => onValChange(e)} name='password' label='Enter Password' />
                            <Button className={classes.loginbtn} onClick={() => loginUser()} >Login</Button>
                            <Typography className={classes.signupText} onClick={() => toggleSignup()}>New to Shopoholic? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <Button className={classes.loginbtn} onClick={() => signupUser()} >Continue</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;