import React, { useState,useEffect } from 'react';
import '../styles/App.css'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import background from "./images/bg2_7_11zon.webp";

import LoginIcon from '@mui/icons-material/Login';
import logolast2 from './images/LOGO_NEW2.webp';

import bg12 from './images/bg14_23_11zon.webp'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Button, Box, List, SwipeableDrawer, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';

import dynamic from 'next/dynamic'


function MyApp({ Component, pageProps }) {
  const [modalShow, setModalShow] = useState(true);
  const [state, setState] = useState({
    left: false,

  });
  const CenterModal = dynamic(() => import('./component/CenterModal'))
  // const _onClick = () => {
  //   setTimeout(() => setModalShow(true), 1000)
  // };
  // _onClick();


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: '150px' }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <Link className='textDec text-center' style={{ textDecoration: 'none' }} href="/"  >
          <a className='textDec text-center' style={{ textDecoration: 'none' }}>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }} >
              <ListItemIcon >
                <HomeIcon className="icon_nav mx-auto" />
              </ListItemIcon>
            </ListItem>
            <ListItemText primary="หน้าแรก" />
          </a>
        </Link>
        <Divider color='white' />
        <a className="textDec text-center" href='https://acc.mm88kickoff.bet/register/' rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }} >
            <ListItemIcon>
              <GroupAddIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="สมัครสมาชิก" />
        </a>
        <Divider color='white' />
        <Link className="textDec text-center" href="/component/Promotion_page" style={{ textDecoration: 'none' }}>
          <a className='textDec text-center' style={{ textDecoration: 'none' }}>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
              <ListItemIcon>
                <CardGiftcardIcon className="icon_nav mx-auto" />
              </ListItemIcon>
            </ListItem>
            <ListItemText primary="โปรโมชั่น" />
          </a>
        </Link>
        <Divider color='white' />
        <Link className="textDec text-center" href="/component/Casino_Games" style={{ textDecoration: 'none' }}>
          <a className='textDec text-center' style={{ textDecoration: 'none' }}>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
              <ListItemIcon>
                <SportsEsportsIcon className="icon_nav mx-auto" />
              </ListItemIcon>
            </ListItem>
            <ListItemText primary="คาสิโน + เกมส์" />
          </a>
        </Link>
        <Divider color='white' />
        <a className="textDec text-center" href='https://acc.mm88kickoff.bet/?fbclid=IwAR121Rkn_3uw449_hreLKrOshvlkTD9mH2YX0qPF_UQFXndQI8gV0MoOWtA' rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemIcon>
              <ExitToAppIcon className="icon_nav mx-auto" />
            </ListItemIcon>
          </ListItem>
          <ListItemText primary="ทางเข้าเล่น" />
        </a>
        <Divider color='white' />
        <Link className="textDec text-center" href="/component/Callcenter" style={{ textDecoration: 'none' }}>
          <a className='textDec text-center' style={{ textDecoration: 'none' }}>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
              <ListItemIcon>
                <SupportAgentIcon className="icon_nav mx-auto" />
              </ListItemIcon>
            </ListItem>
            <ListItemText primary="ติดต่อสอบถาม" />
          </a>
        </Link>
        <Divider color='white' />
      </List>
      <Divider />
    </Box>
  );




  return (
    <div>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <CenterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Head>
        <title>mm88kickoff</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossOrigin="anonymous"></script>
      </Head>
      <div style={{ mb: 2, backgroundImage: `url(${background.src})`, backgroundSize: "100%" }}>
        <div className='mx-auto text-center container' >
          <marquee className="mx-auto text-white" width="100%" direction="left" >
            <strong>
              ** ประกาศ!! ระบบฝาก/ถอน ธนาคารกสิกรและไทยพาณิชย์ ปิดปรับปรุงชั่วคราว ในวันที่ 8 เม.ย. ถึง 9 เม.ย. 2565 ตั้งแต่เวลา 23:00 - 08:00 **
            </strong>
          </marquee>
        </div>
        <div className="w-100 mx-auto px-2 py-2" style={{ backgroundImage: `url(${bg12.src})`, backgroundSize: "cover" }}>
          <div className="row">
            <div className="col-sm">
              <Button className="m-3" onClick={toggleDrawer('left', true)} size='large' variant="outlined"
                style={{ color: "#ffffff" }}
                startIcon={<MenuIcon size='large' fontSize='large' />}><h5>เมนู</h5></Button>
              <SwipeableDrawer
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }
                }}
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
              >
                {list('left')}
              </SwipeableDrawer>
            </div>
            <div className="col-sm container mx-auto">
              <img className="d-block w-75 mx-auto" src={logolast2.src} alt="Second slide" />
              {/* <Image src={logolast2.src} className="img-logo" width={250} height={250} layout="intrinsic" alt="Second slide"  /> */}
            </div>
            <div className="col-sm mx-auto container text-center">
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
      
      <Component {...pageProps} />
      <div className=" text-white w-100 bgcolor1">
        <div className="row w-100 container mx-auto">
          <div className="col-sm-3 p-3 ">
            <img src={logolast2.src} className="w-75 mx-auto d-block" />
          </div>
          <div className="col-sm-9 p-3 text-footer text-justify" >
            <p style={{ wordSpacing: '0px', textIndent: '25%' }}>
              สมาชิกที่สมัครเปิดยูสเซอร์กับทางเว็บ MM88KICKOFF.NET สามารถร่วมสนุกผ่านเว็บไซต์ได้ทั้งทางคอมPCและโทรศัพท์มือถือระบบ ios,android ซึ่งเว็บไซต์มีระบบรักษาความปลอดภัยที่เชื่อถือได้ เเละมีมาตรฐานสากลระดับโลก ในการรองรับ เล่นพนันออนไลน์ เรามีทีมงานคุณภาพเเละมีออฟฟิตที่ได้มาตรฐานอยู่ในประเทศเพื่อนบ้าน เพื่อตอบสนองความต้องการของนักเสี่ยงโชคทุกท่าน เรามีบริการ Call center 24 ชม. มีช่องทางการติดต่อ ทั้ง โทรศัพท์ Line ฉะนั้น MM88KICKOFF เป็นเว็บพนันออนไลน์ที่มาเเรงที่สุดในปี 2022 เล่นได้ทุกอย่างที่ต้องการ บาคาร่า สล็อต หวย และกีฬาอื่นๆอีกมากมาย เล่นจริงจ่ายจริง เชื่อถือได้ 100%
            </p>
          </div>
        </div>
      </div>
    </div>)
}

export default MyApp
