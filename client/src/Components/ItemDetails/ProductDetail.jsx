import { Box, Typography, makeStyles, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';

const useStyle = makeStyles({
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *' :{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#aba3a2'
    },
    badge: {
        marginRight: 10,
        color: '#1d3459',
        fontSize: 16
    },
    wrapper: {
        display: 'flex'
    }
});

const ProductDetail = ({ product }) => {
    const classes = useStyle();
    const date = new Date(new Date().getTime()+(3*24*60*60*1000));
    
    return (
        <>
            <Typography>Available offers</Typography>
            <Box className={classes.smallText}>
                <Typography><Badge className={classes.badge} />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <Typography><Badge className={classes.badge} />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <Typography><Badge className={classes.badge} />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
            <Table>
                <TableBody>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} ₹100(Delivery Charge)</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Seller</TableCell>
                        <TableCell className={classes.smallText}>
                            <span style={{ color: '#2874f0' }}>Lorem ipsum</span>
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</Typography>
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;