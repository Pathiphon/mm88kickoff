import React from 'react'

import logo1 from '../images/pro_s_1_55_11zon.webp'
import logo2 from '../images/pro_s_2_56_11zon.webp'
import logo3 from '../images/pro_s_3_57_11zon.webp'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Box, ImageListItem, ImageList, CardActions, Typography, CardContent, CardMedia, Card } from '@mui/material';
import PropTypes from 'prop-types';
import casino_1 from '../images/casino_zone/Casino 5_29_11zon.webp'
import casino_2 from '../images/casino_zone/Casino1_30_11zon.webp'
import casino_3 from '../images/casino_zone/Casino2_31_11zon.webp'
import casino_4 from '../images/casino_zone/Casino3_32_11zon.webp'
import casino_5 from '../images/casino_zone/Casino4_33_11zon.webp'
import casino_6 from '../images/casino_zone/Casino6_34_11zon.webp'
import casino_7 from '../images/casino_zone/AnyConv.com__5-2.webp'
import slot_1 from '../images/SLOT/AnyConv.com__001.webp'
import slot_2 from '../images/SLOT/AnyConv.com__1-1.webp'
import slot_3 from '../images/SLOT/AnyConv.com__2-1.webp'
import slot_4 from '../images/SLOT/AnyConv.com__3-1.webp'
import slot_5 from '../images/SLOT/AnyConv.com__5-1.webp'
import slot_6 from '../images/SLOT/AnyConv.com__6-1.webp'
import slot_7 from '../images/SLOT/AnyConv.com__7.webp'
import slot_8 from '../images/SLOT/AnyConv.com__10.webp'
import slot_9 from '../images/SLOT/AnyConv.com__14.webp'
import slot_10 from '../images/SLOT/AnyConv.com__22.webp'
import slot_11 from '../images/SLOT/AnyConv.com__23.webp'
import slot_12 from '../images/SLOT/AnyConv.com__26.webp'

import bg_casino from '../images/bg_casino_4_11zon.webp'
import AI2 from '../images/AI2022_1_11zon.webp'

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                maxWidth: 10,
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
export default function Casino_Games() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide w-100" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block img_silder w-100" src={logo1.src} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img_silder w-100" src={logo2.src} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img_silder w-100" src={logo3.src} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='text-center p-2 txt_head' >
                <h4 className="my-auto">SA CASINO คาสิโนสด</h4>
            </div>
            <div className="m-0" style={{ backgroundImage: `url(${bg_casino.src})`, backgroundSize: "cover" }}>
                <div className='container pt-4 pb-4 ' >
                    <div className="d-flex flex-wrap container mx-auto justify-content-md-center">
                        <div className="col m-1 p-0 ">
                            <img loading="lazy" src={casino_1.src} className=' w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_2.src} className='w-casino mx-auto  d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_3.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_4.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_5.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_7.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_7.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_6.src} className='w-casino mx-auto d-block' />
                        </div>
                    </div>



                </div>
            </div>
            <div className='text-center p-2 txt_head' >
                <h4 className="my-auto">เกมส์ Slot ยอดนิยมเล่นง่ายแจกเยอะ</h4>
            </div>
            <div className="m-0" style={{ backgroundImage: `url(${bg_casino.src})`, backgroundSize: "cover" }}>
                <div className='container pt-4 pb-4' >
                    <div className="row container mx-auto ">
                        <div className="col m-1 p-0 ">
                            <img loading="lazy" src={slot_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_2.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_3.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_4.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_5.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_6.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_7.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_8.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_9.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_10.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_11.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={slot_12.src} className='w-casino mx-auto d-block' />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${bg_casino.src})`, backgroundSize: "cover" }}>
                <div className='w-100 pt-3 line_cus' >
                    <h4 style={{ whiteSpace: 'nowrap' }}>โปรแกรม AI อัจฉะริยะ</h4>
                </div>
                <div className=" text-white text-center"> สูตรบาคาร่า AI สูตรแทงบาคาร่า รวมสูตรบาคาร่าทั้งสองค่ายไว้ในเว็บเดียวมีทั้ง สูตร sexy บาคาร่า , สูตร SA บาคาร่า โปรแกรมวิเคราะห์บอล AI วิเคราะห์บอล</div>

                <div className="row padding-ai mx-auto mt-3">
                    <div className="col-sm-8 ">
                        <div className="text-center m-1"> <img loading="lazy" src={AI2.src} className="img_programAI" /></div>

                    </div>
                    <div className="col-sm-4  d-flex align-items-center justify-content-center " >
                        <div className="col-sm mx-auto container text-center ">
                            <Button
                                style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '280px', minHeight: '50px', color: '#000000' }}
                                variant="contained" className="w-75 btn_register text-dark" rel="noreferrer" target="_blank" component="a" href="https://acc.mm88kickoff.bet/register/" startIcon={<GroupAddIcon />}>
                                Register สมัครสมาชิก
                            </Button>

                            <div className="row mt-2">
                                <div className="col">
                                    <Button
                                        style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '280px', minHeight: '50px' }}
                                        variant="contained" color='error' className="w-75" rel="noreferrer" target="_blank" component="a" href="https://acc.mm88kickoff.bet/?fbclid=IwAR121Rkn_3uw449_hreLKrOshvlkTD9mH2YX0qPF_UQFXndQI8gV0MoOWtA" startIcon={<LoginIcon />}>
                                        Login เข้าสู่ระบบ
                                    </Button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
