import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import ProductDetail from './ProductDetail';
import LeftItem from './LeftItem';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#aba3a2'
    }
}));

const DetailScreen = ({ history, match }) => {
    const classes = useStyles();

    
    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, product } = productDetails;

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && match.params.id !== product.id)   
            dispatch(getProductDetails(match.params.id));
    }, [dispatch, product, match, loading]);

    return (
        <Box className={classes.component}>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Grid container className={classes.container}> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <LeftItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.long}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                            5 Ratings and 5 Reviews
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price}</span>&nbsp;&nbsp;&nbsp; 
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid>
                </Grid>
            }   
        </Box>
    )
}

export default DetailScreen;