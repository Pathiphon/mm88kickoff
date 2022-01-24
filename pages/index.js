import bg9 from './image/bg9.png';
import bg1 from './image/bg1.jpeg'
import bg2 from "./image/bg2.jpg";
import bg13 from "./image/bg13.jpg";
import demo1 from './image/slide-sa-demo.jpg'
import button1 from './image/button-sa.png'

import casino1 from './image/sport-casino-1.png'
import logo1 from './image/test1.png';
import logo2 from './image/test2.png';
import logo3 from './image/test3.png';


export default function Index() {
  return (
      <div className="App w-100"  >
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ backgroundImage: `url(${bg1.src})`,backgroundSize:'cover'}}>
              <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img  className="d-block img_silder well2" src={logo1.src} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block img_silder well2 " src={logo2.src} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block img_silder well2" src={logo3.src} alt="Third slide" />
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
          <div className="w-100 pt-3" style={{ backgroundImage: `url(${bg9.src})`, backgroundSize: "100%" }}>
              <div className="card  card_home2 container">
                  <div className="card-body">
                      <h5 className="card-title text-center">MM88KICKOFF เว็บคาสิโนออนไลน์ บาคาร่า สล็อต แทงบอล ครบจบในเว็บเดียว</h5>
                      <p className="card-text pl-1 pr-1 ">
                      สมัครเว็บ MM88KICKOFF รวบรวมการเดิมพันออนไลน์ทุกอย่างไว้ ในบัญชีการใช้งานเพียงบัญชีเดียว MM88KICKOFF เป็นเว็บตรง รวบรวมการเดิมพันออนไลน์ทุกอย่างไว้ในบัญชีการใช้งานเพียงบัญชีเดียว จึงมีความมั่นคงเเละปลอดภัย 100% เพราะ MM88KICKOFF.NET เป็นเว็บตรงที่ไม่ผ่านตัวแทนเเละไม่ผ่านเอเยนต์ใดๆ ฝาก-ถอน ด้วยระบบออโต้ตลอด 24ชั่วโมง สมัครเว็บกับเราสิคะ  MM88KICKOFF ฝากถอนไม่มีขั้นต่ำ เรามีพนักงานบริการตลอด 24 ชั่วโมง เว็บพนันออนไลน์ที่มาเเรงที่สุดในปี 2022 เว็บเเทงบอลออนไลน์ที่ราคาน้ำดีที่สุดในตอนนี้ เว็บพนันได้เงินจริง ไม่มีการล้มโต๊ะ เล่นจริงจ่ายจริง เเทงบอลไม่มีขั้นต่ำ เชื่อถือได้ 100%                        </p>
                  </div>
              </div>
              <div className="text-center pt-2 ">
                  <img  src={casino1.src} className="img_max" />
              </div>
          </div>
          <div style={{ backgroundImage: `url(${bg2.src})`, backgroundSize: "cover" }}>
              <div className='w-100 pt-3 line_cus' >
                  <h4 style={{whiteSpace:'nowrap'}}>Live บาคาร่า</h4>
              </div>
              <p className='text-white p-2 m-3'>คาสิโนออนไลน์อันดับ 1 ของประเทศไทย คาสิโนออนไลน์เว็บตรงของ mm88bet มีทั้ง SA Gaming เกมคาสิโนยอดนิยมพบกับคาสิโนสด SA บาคาร่า SA ได้รวมคาสิโนสดยอดนิยมไว้ในที่เดียวอิทิ เช่น บาคาร่า , เสือ มังกร , Sic Bo , รูเล็ต, ไฮโล,  ป๊อกเด้ง,  เเบล็กเเจ็ก,  สล็อต777 สมัครสล็อตออนไลน์วันนี้ท่านสามารถเล่น สล็อตออนไลน์มือถือ ไม่ว่าจะเป็น สล็อตออนไลน์777 สล็อตออนไลน์888 หรือ สล็อตที่ได้รับความนิยมสูงสุดตอนนี้ สล็อตjoker เเตกมาเเล้วเป็นล้าน ลุ้นกันง่ายๆกับสล็อตออนไลน์ ฝากถอนไม่มีขั้นต่ำกับเว็บสล็อตออนไลน์ที่นี้ที่เดียว ทดลองเล่นพร้อมเครดิตฟรี  สมัครบาคาร่าเว็บไหนดี บาคาร่า88 บาคาร่า66 บาคาร่า99 บาคาร่าsa บาคาร่า168 ลองเปิดใจสมัครเว็บบาคาร่าmm88 ดูซิค่ะ บาคาร่าเว็บนี้ดีที่สุด เพราะเป็นเว็บบาคาร่าที่คนเล่นเยอะที่สุด บาคาร่าออนไลน์เล่นได้เงินจริง โอนจริงโอนไว สมัครบาคาร่า888 วันนี้เรามีสาวๆ Sexy ทั้งเอเชียเเละยุโรปคอยบริการตลอด 24ชม. กับ sexy baccarat, tiger dragon ฯลฯ</p>
              <div className="text-center pt-2 " style={{ position: "relative" }}>
                  <img  src={demo1.src} className="rounded w-100" />
                  <a target="_blank" href='https://web.sa-globalxns.com/h5web/index.html'>
                      <img src={button1.src} className="in_img fade_btn" />
                  </a>
              </div>
          </div>
          
      </div>
  )
}
