import { Divider, List, ListItem, ListItemText, ListItemAvatar, ListItemButton  } from '@mui/material';
import React from 'react'
import Line_ic from '../images/icon-line.webp'
import FB_ic from '../images/icon-facebook.webp'
import PH_ic from '../images/icon-call.webp'

import bg_call from '../images/icon_callcenter.webp';
import bg from '../images/AnyConv.com__bg_callcenter.webp'
export default function Callcenter() {
    const line_click =()=>{
        window.open('https://lin.ee/pySo6A5');
    }
    const fB_click =()=>{
        window.open('https://www.facebook.com/MM88KICKOFF');
    }
    return (
        // <div className='mx-auto w-100' style={{ height:"500px",backgroundImage: `url(${bg_call.src})`, backgroundSize: "cover" }}>
        <div className='mx-auto w-100' style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>

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
                        <h5 className='text-center '>ช่องทางการติดต่อ</h5>
                        <ListItemButton  onClick={line_click}>
                            <div className='w-25'>
                                <ListItemAvatar >
                                    <img loading="lazy" className="d-block mx-auto" src={Line_ic.src} style={{ width: '80%' }} />
                                </ListItemAvatar>
                            </div>
                             <p className='text_bold my-auto'>Line ID : @88kickoffservice</p>
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                        <ListItemButton onClick={fB_click}>
                            <div className='w-25'>
                                <ListItemAvatar >
                                    <img loading="lazy" className="d-block mx-auto" src={FB_ic.src} style={{ width: '80%' }} />
                                </ListItemAvatar>
                            </div>
                            <p className='text_bold my-auto'>Facebook : MM88KICKOFF</p>
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <div className='w-25'>
                                <ListItemAvatar >
                                    <img loading="lazy" className="d-block mx-auto" src={PH_ic.src} style={{ width: '80%' }} />
                                </ListItemAvatar>
                            </div>
                            <p className='text_bold my-auto'>โทร : 📞 091-4053883</p>
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    )
}
