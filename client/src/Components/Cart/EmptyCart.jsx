import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        width: '80%%',
        height: '65vh',
        background: '#fff',
        margin: '80px 140px',
        textAlign: 'center',
        paddingTop: 70
    },
    img: {
        width: '25%'
    }
})


const EmptyCart = () => {
    const url = 'https://images.unsplash.com/photo-1619191163420-4a7c0798b8a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
    const classes = useStyle();

    return (
        <Box className={classes.component}>
                <img src={url} className={classes.img} />
                <Typography style={{fontWeight: 600, marginTop: 20, fontSize: 20}}>Your cart is empty!!</Typography>
        </Box>
    )
}

export default EmptyCart;