import { Box, makeStyles } from '@material-ui/core';
import Banner from './Home/Banner';
import Slide from './Home/Slide';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { getProducts as listProducts } from '../redux/actions/productActions';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Box className={classes.component}>
                <Banner />
                <Slide
                    data={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Best Price Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Most Sold Items'
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home;