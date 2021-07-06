import { useState, useEffect } from 'react';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';

const useStyle = makeStyles({
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    greyTextColor: {
        color: '#878787'
    },
    container: {
        '& > *': {
            marginBottom: 20,
            fontSize: 14
        }
    },
    price: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #aba3a2',
        padding: '20px 0',
        borderBottom: '1px dashed #aba3a2'
    },
    placeOrder: {
        display: 'flex',
        margin: 'auto',
        background: '#1d3459',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 50
    }
})


const CartScreen = ({ cartItems }) => {
    const classes = useStyle();
    const [price, setPrice] = useState(0);

    useEffect(() => {
        total();
    }, [cartItems]);
    
    const total = () => {
        let price = 0;
        console.log(cartItems);
        cartItems.map(item => {
            price += item.price
        })
        setPrice(price);
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.header} style={{borderBottom: '1px solid #aba3a2'}}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={clsx(classes.header, classes.container)}>
                <Typography>Price ({cartItems?.length} item)<span className={classes.price}>₹{price}</span></Typography>
                <Typography>Delivery Charges<span className={classes.price}>₹100</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price + 100}</span></Typography>
                <Typography style={{fontSize: 16, color: 'green'}}>*Will be delivered within 3 working days</Typography>
            </Box>
            <Box className={classes.bottom}>
                <Button variant="contained" className={classes.placeOrder}>Place Order</Button>
            </Box>
        </Box>
    )
}

export default CartScreen;