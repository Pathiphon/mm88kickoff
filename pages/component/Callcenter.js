import { Divider, List, ListItem, ListItemText, ListItemAvatar, ListItemButton  } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import React from 'react'
import Line_ic from '../image/line-icon.png'
import FB_ic from '../image/facebook_icon.png'
import PH_ic from '../image/phone_icon.png'

import bg_call from '../image/callcenter.png';
export default function Callcenter() {
    const line_click =()=>{
        window.open('https://lin.ee/pySo6A5');
    }
    const fB_click =()=>{
        window.open('https://www.facebook.com/MM88KICKOFF');
    }
    return (
        // <div className='mx-auto w-100' style={{ height:"500px",backgroundImage: `url(${bg_call.src})`, backgroundSize: "cover" }}>
        <div className='mx-auto w-100'>

            <div className='row mx-auto' >
                <div className='col-sm'>
                <img loading="lazy" className="d-block w-75 mx-auto" src={bg_call.src} />
                </div>
                <div className='col-sm d-flex align-items-center justify-center'>

                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,

                        }}
                    >
                        <h5 className='text-center'>ช่องทางการติดต่อ</h5>
                        <ListItemButton  onClick={line_click}>
                            <div className='w-25'>
                                <ListItemAvatar >
                                    <img loading="lazy" className="d-block mx-auto" src={Line_ic.src} style={{ width: '80%' }} />
                                </ListItemAvatar>
                            </div>
                            <ListItemText primary="Line ID : @88kickoffservice" />
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                        <ListItemButton onClick={fB_click}>
                            <div className='w-25'>
                                <ListItemAvatar >
                                    <img loading="lazy" className="d-block mx-auto" src={FB_ic.src} style={{ width: '80%' }} />
                                </ListItemAvatar>
                            </div>
                            <ListItemText primary="Facebook : MM88KICKOFF" />
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <div className='w-25'>
                                <ListItemAvatar >
                                    <img loading="lazy" className="d-block mx-auto" src={PH_ic.src} style={{ width: '80%' }} />
                                </ListItemAvatar>
                            </div>
                            <ListItemText primary="โทร : 📞 091-4053883" />
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    )
}
