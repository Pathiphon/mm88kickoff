import React from 'react'
import Promo from '../image/promotion_ex.png';
import { Button, Box, CardActions, Typography, CardContent, CardMedia, Card } from '@mui/material';
import PropTypes from 'prop-types';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
        
        sx={{
          p: 1,
          m: 'auto',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
export default function Promotion_page() {
    return (
        <div className='bg-dark p-3 w-100'>
            <Box
            className="text-center mx-auto"
               sx={{
                display: 'flex',
                flexWrap: 'wrap',
                p: 1,
                m: 1,  
                
                borderRadius: 1,
              }}
            >
                <Item>
                <Card sx={{ maxWidth: 520,backgroundColor:'#E0E0E0'  }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={Promo.src}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" className="text-justify" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" color="secondary" sx={{m:'auto'}} size="large">รับโปรโมชั่น</Button>
                    </CardActions>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 520,backgroundColor:'#E0E0E0'  }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={Promo.src}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" className="text-justify" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" color="secondary" sx={{m:'auto'}} size="large">รับโปรโมชั่น</Button>
                    </CardActions>
                </Card>
                </Item>
            </Box>
        </div>
    )
}
