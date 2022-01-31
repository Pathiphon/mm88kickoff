import React from 'react'
import Promo from '../image/promotion_ex.png';
import { Button, Box, CardActions, Typography, CardContent, CardMedia, Card } from '@mui/material';
import PropTypes from 'prop-types';
import promotion1 from '../image/promotion1.jpeg'
import promotion2 from '../image/promotion2.jpeg'
import bg_pro from '../image/bg_pro.jpeg'


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
        <div className='p-3 w-100' style={{mb:2, backgroundImage: `url(${bg_pro.src})`, backgroundSize: "cover" }}>
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
                    <Card sx={{ maxWidth: 520, backgroundColor: '#E0E0E0' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            sx={{ width: '100%' }}
                            image={promotion1.src}
                        />
                        <CardContent >
                            <Typography variant="body1" className="text-justify d-flex align-items-center">
                                🧧คืนยอดสูงสุด 3% ทุกเกมส์การพนัน🧧<br />
                                🔶สูงสุด 3,333 บาท ของทุกเดือน<br />
                                ทำยอดเทิร์น 1 เท่าสามารถอนได้เลย<br />
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="contained" color="secondary" sx={{ m: 'auto' }} size="large">รับโปรโมชั่น</Button>
                        </CardActions>
                    </Card>
                </Item>
                <Item>
                    <Card sx={{ maxWidth: 520, backgroundColor: '#E0E0E0' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            sx={{ width: '100%' }}
                            image={promotion2.src}
                        />
                        <CardContent>
                            <Typography variant="body1" className="text-justify d-flex align-items-center" >
                                โปรโมชั่นสำหรับสามาชิกใหม่สมัครครั้งแรกฝากขั้นต่ำ 300 บาท <br />
                                รับเครดิตฟรีทันที 50 บาท
                                เงื่อนไข<br /> ทำเทิร์น 350 ถอนได้เลย
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="contained" color="secondary" sx={{ m: 'auto' }} size="large">รับโปรโมชั่น</Button>
                        </CardActions>
                    </Card>
                </Item>
            </Box>
        </div>
    )
}
