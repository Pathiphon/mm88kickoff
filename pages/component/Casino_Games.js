import React from 'react'
import Page_C1 from '../image/page_C1.png';
import Page_C2 from '../image/page_C2.png';
import Page_C3 from '../image/page_C3.png';
import Page_C4 from '../image/page_C4.png';
import Page_C5 from '../image/page_C5.png';
import Page_C6 from '../image/page_C6.png';
export default function Casino_Games() {
    return (
        <div>
            <div className="text-center " style={{ position: "relative" }}>
                    <img src={Page_C1.src} className="rounded w-100" />
                
                </div>
                <div className="text-center " style={{ position: "relative" }}>
                    <img src={Page_C2.src} className="rounded w-100" />
                
                </div>
                <div className="text-center " style={{ position: "relative" }}>
                    <img src={Page_C3.src} className="rounded w-100" />
                
                </div>
                <div className="text-center " style={{ position: "relative" }}>
                    <img src={Page_C4.src} className="rounded w-100" />
                
                </div>
                <div className="text-center " style={{ position: "relative" }}>
                    <img src={Page_C5.src} className="rounded w-100" />
                
                </div>
                <div className="text-center " style={{ position: "relative" }}>
                    <img src={Page_C6.src} className="rounded w-100" />
                
                </div>
        </div>
    )
}
