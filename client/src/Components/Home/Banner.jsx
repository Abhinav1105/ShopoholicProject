import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { bannerData } from '../../constant/data';


const useStyle = makeStyles(theme => ({
    img: {
        width: '100%',
        height: 300,
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel 
            autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#ffffff',
                    backgroundColor: '#1d3459',
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.img} />
                ))
            }
        </Carousel>
    )
}

export default Banner;