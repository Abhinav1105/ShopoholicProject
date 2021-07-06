import { useState, useContext, useReducer, useEffect } from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
import { addToCart } from '../../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        padding: '40px 0 0 80px',
        textAlign: 'center'
    },
    productImage: {
        padding: '15px 20px',
        width: '80%'
    },
    button: {
        width: '80%',
        borderRadius: 2,
        height: 50,
        marginLeft: 10
    },
    addToCart: {
        background: '#1d3459',
        color: '#FFF'
    }
}));

const LeftItem = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
    const { account } = useContext(LoginContext);
    const { id, price, url, title } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id));
        history.push('/cart');
    }

    return (
        <Box className={classes.leftContainer}>
            <img alt="product" src={product.url} className={classes.productImage} /><br />
            <Button onClick={() => addItemToCart()} className={clsx(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained"><Cart />Add to Cart</Button>
        </Box>
    )
}

export default LeftItem;