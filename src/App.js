import { FaCar, FaCheck, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { CiLocationOn, CiClock2 } from 'react-icons/ci'
import Pic from "./pic1.webp"


function App() {
  return (
    <div className="container">
      <div className="main_part">
        <div className="main_logo">
          <FaCar />
        </div>
        <div className="main_text">
          RICH CAR
          <br />
          DETAILING
        </div>
        <div className="m_text">
          Ijtimoiy Tarmoqlar
        </div>
        <div className="social_network_btns">
          <a href="https://www.instagram.com/richcar.uz/"><FaInstagram /></a>
          <a href="https://www.instagram.com/richcar.uz/"><FaTelegramPlane /></a>
        </div>
        <div className="background_image">
        </div>
        <div className="info_box">
          <div className="info_main_text">
            Biz Qanday Xizmatlarni <br />
            Taqdim Etamiz ?
            <p>Bizning mutaxassislarimiz sizning avtomobilingiz yangidek bo'lishini <br /> ta'minlash uchun barcha ishlarni amalga oshirdir.</p>
          </div>
        </div>
        <div className="service_box">
          Xizmatlar
          <img src={Pic} alt="" />
          <ul className="service_container">
            <li><FaCheck /> Keramika</li>
            <li><FaCheck /> Tanirovka</li>
            <li><FaCheck /> Broni Plenka</li>
            <li><FaCheck /> Ximchistka</li>
            <li><FaCheck /> Kuzov Pakraska</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <h1>Bog'lanish Uchun</h1>
        <a className="footer_button" href="#">
          <CiLocationOn />
          Ipakchi ko'chasi, Tashkent, Uzbekistan
        </a>
        <a className="footer_button" href="#">
          <CiClock2 />
          09:00-20:00
          <br />
          Har Kuni
          <br />tanaffuslar va dam olish kunlarisiz
        </a>
        <a href="tell:+998983077005" className="call_me">
          <CiClock2 />
          +998983077005</a>
      </div>
    </div>
  );
}

export default App;
