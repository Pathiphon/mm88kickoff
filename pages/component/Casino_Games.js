import React from 'react'
import logo1 from '../image/pro_s_1.jpg'
import logo2 from '../image/pro_s_2.jpg'
import logo3 from '../image/pro_s_3.jpg'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Box, ImageListItem, ImageList, CardActions, Typography, CardContent, CardMedia, Card } from '@mui/material';
import PropTypes from 'prop-types';
import casino_1 from '../image/Casino1.jpg'
import bg_casino from '../image/bg_casino.png'
import AI2 from '../image/AI2022.jpeg'
import bg_btn from '../image/bg_btn.jpeg'

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
                        <img loading="lazy" className="d-block img_silder w-100" src={logo1.src} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img loading="lazy" className="d-block img_silder w-100" src={logo2.src} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img loading="lazy" className="d-block img_silder w-100" src={logo3.src} alt="Third slide" />
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
                <div className='container pt-4 pb-4' >
                    <div className="row container mx-auto ">
                        <div className="col m-1 p-0 ">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="w-100"></div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
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
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>

                        <div className="w-100"></div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="w-100"></div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                        <div className="col m-1 p-0">
                            <img loading="lazy" src={casino_1.src} className='w-casino mx-auto d-block' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{backgroundColor:'#1F1F1F'}}> */}
            <div style={{ backgroundImage: `url(${bg_casino.src})`, backgroundSize: "cover" }}>
                <div className='w-100 pt-3 line_cus' >
                    <h4 style={{ whiteSpace: 'nowrap' }}>โปรแกรม AI อัจฉะริยะ</h4>
                </div>
                <div className=" text-white text-center"> สูตรบาคาร่า AI สูตรแทงบาคาร่า รวมสูตรบาคาร่าทั้งสองค่ายไว้ในเว็บเดียวมีทั้ง สูตร sexy บาคาร่า , สูตร SA บาคาร่า โปรแกรมวิเคราะห์บอล AI วิเคราะห์บอล</div>

                <div className="row padding-ai mx-auto mt-3">
                    <div className="col-sm-8 ">
                        <div className="text-center m-1"> <img loading="lazy" src={AI2.src} className="w-75" /></div>

                    </div>
                    {/* <div className="col-sm  d-flex align-items-center padding-btn" style={{ backgroundColor:'#060609' }}> */}
                    <div className="col-sm-4  d-flex align-items-center padding-btn" >
                        <div className="col-sm mx-auto container text-center ">
                            <Button
                                style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '300px', minHeight: '50px', color: '#000000' }}
                                variant="contained" className="w-75 btn_register text-dark" rel="noreferrer" target="_blank" component="a" href="https://acc.mm88kickoff.bet/register/" startIcon={<GroupAddIcon />}>
                                Register สมัครสมาชิก
                            </Button>

                            <div className="row mt-2">
                                <div className="col">
                                    <Button
                                        style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '300px', minHeight: '50px' }}
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
