import { Card, makeStyles, Box, Typography, Button } from '@material-ui/core';
import { addEllipsis } from '../../utils/util';
import clsx from 'clsx';

const useStyle = makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex'
    },
    leftComponent: {
        margin: 20, 
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        height: 110,
        width: 110
    },
    mid: {
        margin: 20
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    remove: {
        marginTop: 10,
        fontSize: 16,
        backgroundColor: '#1d3459',
        color: '#ffffff'
    }
});

const CartItem = ({ item, removeItemFromCart }) => {
    const classes = useStyle();

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img alt="product" src={item.url} className={classes.img} />
            </Box>
            <Box className={classes.mid}>
                <Typography>{addEllipsis(item.title.long)}</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}>Seller:Lorem ipsum dolor sit amet
                </Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.price}</span>
                </Typography>
                <Button className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;